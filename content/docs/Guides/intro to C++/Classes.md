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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4HGP6OT%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T121735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCDEb8G%2F6r6shtdzu2Zc365FOLiofPCux1aAa%2BRi6hkeAIgBeBi0k6sXHZm5gfEAHbGDT2lgLjSt84H2xQmOkJLPCMq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDFA9S%2BeDrzQIcT%2Bl6CrcA1tpZM9nAQz3fF1wI%2BMbY3rsOS99g%2FJnH4%2FGULkdbh3SUiqkyQRisvMsJJQDfmVLrmOp3fGX9mYpH2JQ%2F3Biks4Tuc46nY%2F6tQSCRek3p1srogQR7VVkdQ9UJsCN7coTI42KEO4sNomGBYnocqpry2JCnThiAKYb1gZPNSZyGcp4QCgLHa6aqPBm9rWnxO6U43Xbq1dKTOJqtS1DZx%2FeZrOFM81k1hN%2BgRHEv%2BaTi%2FAAvWVRtLlCI00OB3cD8AUHVMdm5wQCnpSqBIpdEwxi%2BnEGop%2FDgWnx%2BNc2Vx%2FgQOU0psl74hKkhPsADYNGq7Xgbddy9jqJ%2F8fwPsuo5XxXy1F7gM6lS5C0g71ebcqiec%2BTVyPkTyTXyMlv7HMcvsQY0I3td%2FQV5ZQQpLf7a0PkaAegEyV7v3E%2B96%2FMLntsaLaqFed%2BaM6%2B5%2Fta6z2nDPlRXKZIGUXftgFkX0gi7xmevE5SKbSaBYaOzmj%2Byen%2FLdbmSelwQWEL0TmcF5TexJ4qhtAyUYnJ3LzzQA%2FUTB9NobTe5j3mLhqcPpoyX%2BQQvTIwYyTiJ0%2BTvGLi62vZNzzt7AG4K5%2B8%2F%2ByobXH4Ez0EvYPARi1t7kmWaDZsnEyyAFE%2BQLUqiDRxDR0JKhHxMMGD2cMGOqUBYDZxL455nZhE8vRZ7A64JIGN1raNe832MxH5aLQbO6MlftJfBunxV6fPklFCtsi32aZNAaye0%2BvJfWBWadOEtY35CZ0tSStu2iFNw0S7s69IRCgyXNvwQ7xXKj0%2FTNnjNbK3%2B4mBUgMs%2F8cAL8EVEcv1WgZcBQySR18EvfXQbCYsYyvZkuxorDS55rSJ6S6TmiqY6%2FkXXCzwU8M0TmQOFb4CF7T5&X-Amz-Signature=ca2e7a14b4afdaf5abffc36abaaa10125eaafd4fc0bd024f22da89bad2a9e4f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
