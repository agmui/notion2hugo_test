---
sys:
  pageId: "2329c1cd-96c8-4fd3-a4f3-9920d69d1c8a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-11-08T18:33:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Classes.md"
title: "Classes"
date: "2024-11-08T18:33:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 113
toc: false
icon: ""
---

## basic class template

```cpp
class Milk {
private:
    int milk;
    int private_func() {
        return 69;
    }
public:
    Milk(int milk): milk(milk) {

    }
    ~Milk() {} // deconstructor
    void drink(int galOfPilk) {
        printf("drinking %dL of Milk\n", galOfPilk);
        printf("%d\n", this->private_func());
    }
    int getMilk() {
        return this->milk;
    }
};

int main(){
	Ilk i;
	i.drink(1);
	
	Ilk* i = new Milk();
	i->drink(1); // arrow syntax when i is a pointer
	i->~Milk();
}
```

<details>
      <summary>What is </summary>
       `~Milk()`is a [de-constructor](https://www.geeksforgeeks.org/destructors-c/#) (its basically like `free()` in c). Unlike Java or python, C++ is not garbage collected so when we make an object we have to also manually delete it. The computer does not magically make it go away when you are done with it.
  </details>

## [Inheritance](https://www.geeksforgeeks.org/inheritance-in-c/)

```cpp
class A{
	...
};

class B: public A{
	...
};
```

### Creating objects

```cpp
int main(){
	Person* p = new Person(1,2,3); // heap allocated
	Person p2(1,2,3);      // stack allocated
}
```

```cpp
class A{
public:
	A(){
		...
	}
};
int main(){
	A a; // Note: if your constructor does not take any arguments
}
```

> Note: you will learn what stack and heap are in CSSE132 but for now we generally use stack allocated in Robomasters

Why use stack over heap?:

This is what the `new` operator calls when ever it gets used.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRJYR7K6%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCICwD27Mzmuo8fnY4YuNzflJEjyuh%2BCDPx7f20wi%2FPAuaAiBNIjEgI8i8rDktESUtNq4Sx2fWTVWXes2g4xJxE1kxICqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkroR7YoSs9qcbqSUKtwDJHRpfl3w1cDJGeZxrE0rTzeQx6vBsAOSKG5R0yd%2FHc7GomtSaoWjT6EWRyvI0aWpFOh6huUQbLP1Y7W3ChxZXC0l4kB0LNHhtB5vzf%2BfdKspi8M31zHpSYTAblnGs362oUF3xVZxwVUFW2su6BJ0fD8GSRQBhCFsltP%2FxmrnPDFaYjOCtKlMERiZSXPyTg9Ucj%2F30gFSqgvXu3IPYqLGywqfm%2F474q1qZkF9H3Ms2UnuhfeB9i3C1CnYGpSH7CAqKFpdc45ZWmtGspZMx1qsocx8Tf1x8feuscyDTFTAt9AZO65dxY7m8qxrO8qdBaa5H4ZxVRdTLje2ciEfPj19M66e7Zn1eK5fYdZrn5c6AFftdVkI2C4G%2FHJMWKqkAwAUkI%2BashQ7QrM7QKpRFd%2FcSWexoa19nCFuiOSMqipnBxoQD%2FQfIO%2FU7STVHnqWD3dOpSpIzr4Zu1h7RuMjpJip4xSGT5MKs2KhoeQzzS%2BqGuKoj%2Frm9G0kBOgympOpnlyIMU%2FS%2FJvPhpz3ntIICgm8FNXQMkdrlyoXOAd821DrAtPcaaE1Mh%2B%2FTsnIvPq8UBWfzqZvTCWQ9hBh4m4z89sHbPytVw06pBSgeAreLavne7djRxEAOVhbuIC5wQcw%2BcTbxAY6pgHrd%2Ft38Nx45IKGgYObN4HEc%2FhNDPOR6qzUMIeCp5rRUwkLpz5ET%2FP0WLdasqbihvzH1pT5Q1fVPrWk4L73YBUwqFuJ817vZC2pRbd5V6rPQ%2FeIRRh7%2Bde8yBX7f3MLaG85KBTvoOJcyebV000DwTGOdIhdSPvJMvt%2FtpgUjcWVUb2NppK7sQZkC7JMzX%2BJNPGprefsc25XJWdGsqZBwcFvcWjIWF6I&X-Amz-Signature=f147abff246a7a0eff000940bd7b58588dcdf216ac157e77e37c1cb6f366ff24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Constructors

For constructors, there are 2 ways of doing it

```cpp
class Person{
	private:
		int age;
		int height;
		int weight;
		MyClass myClass;
	public:
		Person(int age, int height, int weight){
			this->age = age;
			this-> height = height;
			this->weight = weight;
			this->myClass(69);
		}
};
```

 _constructor initializer list:_

```cpp
class Person{
	private:
		int age;
		int height;
		int weight;
	public:
		Person(int age, int height, int weight):age(age),height(height),weight(weight), myClass(69)
		{
			...
		}
};
```

We generally use the second form because

## NOTE: YOU CANT CALL CONSTRUCTORS WHEN DECLARED!!!

All together

```cpp
#include <iostream>
#include <string>

using namespace std;

class Milk
{
private:
    int milk;
    int private_func() {
        return 69;
    }
public:
    Milk(int milk): milk(milk) {
    }
    ~Milk() {}
    void drink(int galOfPilk) {
        printf("drinking %dL of PILK\n", galOfPilk);
        printf("%d\n", this->private_func());
    }
    int getMilk() {
        return this->milk;
    }
};
class Pilk : public Milk // inheritance
{
private:
    string cola;
    int numDrinks;
public:
    Pilk(string cola, int numDrinks, int milk)
        : cola(cola),
          numDrinks(numDrinks),
          Ilk(milk)
    {
        printf("pilk\n");
    }
    string getCola() {
        return cola;
    }
};

int main()
{
    Ilk *i = new Ilk(420);
    i->getMilk();
    Pilk p("coco cola", 420, 2);
    p.drink(1337);
    i->~Ilk();
}

```

## TODO: explain → arrow syntax

# Exercise:

make 2 classes:

- Car
	- string name
	- getName()
- Vehicle
	- int id
	- void drive() // prints "vroom"
