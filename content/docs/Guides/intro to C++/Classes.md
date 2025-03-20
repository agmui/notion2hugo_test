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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OPHZDW5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIHVDPemnxbTsdVtBdJSHkDJPVqQ81Jh5uyIzuERFCGvfAiEA3hF%2FpBqYJY%2FC1JEsW2H8Y1DQSlt%2BOdra2Tg%2BojKP9CkqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkwwV2Rq9h6%2Bcc6FircAxiqF%2BaSQlthwDIopNhWiU2WcQNjrLtbb6HuTnro8Wv%2Bw6%2BVTx%2FyNr7fMmiTdjKWWb7nbJN%2FNCcpXzDAuTg6DRpOtIFaz7G%2BhD4EofyLM6sJx%2BHBnJZzzxr6%2FD4soWxDz%2BpKejy0wpw6pdxFuICywYeFX6efxaIYhHfYo%2FIrqlbB71qW97vh%2Br0SPV9o4MuoFY4kRBod4nTcFmsJl%2BDAIV2rXmNDpCFjUSBWgGqlPpuG5vSgVlZdxTUUweZ6%2FMSEETh4klM1MD4rpcVTgZvvDVMnCGqAfgOG3HKz%2FilcPDAowwFMD9e5URy5GUdkdhKdMyyH22d8Lq6PpZ5fTZTW85mBt3%2Bh8g9oUBahiN0OGfrNFCUah18BFRpJZR78GhGJFqF%2BnrqbyzCI2m9ejzewWX8YLON%2BZwIloCjkpqT8MOmj7Y1uJ%2BgqsTjUyag9%2FbF20HteAnNrgWUwciSGfNB2nkdDtUY6cKn58%2F55%2BRC22QQNEJ71uqcOgjot%2BHJ0JS8tDyD95VyujPFZuUiRI6O%2B5JgIBJp8kKmagYJShmBoSv7bRd%2BHjLTnggiUehbThgp%2FDwOfUVjB8Lup%2Br8YcSikNYeVopUneHx9f1j0R52fx1gNvqhFSQyrej0HGZuBMKOn8r4GOqUBGaZcpDp7qhaxubKXOJPKN3wK87jM74REDND4iwW9Gg%2Bj3JbV6Ds8VIrjP3vPIRHtysdBDRItql1x%2BJmoKzt03IeXGhaPq6%2BjUVbg%2BHGtMV7Y3e9zFKAYOnK%2BM6OXxV%2BmWmRXJ6sPawpbiWvE6W5EFarE2KpKFysiNTHYdFFyDwm%2Fr8oYkH%2BAjecpoeymYjXA8LqgLrsDXBkNxCCz2Dci6jBYruFH&X-Amz-Signature=7575afd01aa8ac3af23dd5b0c83751e016147330736935a4e9e364ea624be357&X-Amz-SignedHeaders=host&x-id=GetObject)

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
