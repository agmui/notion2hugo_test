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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667MMYBZB%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T020637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIAlZYaT3hkp6xz9MQM7ULC6y1rCKmXBHRPVOEe6YDIw2AiEAtW2RY0I6jtAouvt91AHvFOgfQaQQyM44j0BAOwt8NMQqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDZfw98B3OMJIi1pTCrcA6NjrsjRpdr2J%2FdBZpyoZVAmIjLxmS6AXQDPjMhgolPjS1Ng389Mesl5bztC4Sm2C%2FnFZ6Hq7VSk6hcWN1yRKna71mbKpbKSVWTfOMYTas3EJfs4ZRZp3v0rRDKlYraT13Vp9eBL5RFpS5Eb1Y4t64%2BAGtGx%2FPQoS4ufT7XhNY9XVyRhvgiaTBbolL6LlJwvzINjVRpJ%2BFZ%2FPzn7nFw54dvmR4UvBWQ%2BZ%2FRBQCMMehBkV8Hqjv%2FrYwUPtYejcjeFm49bRE2peO13p2IfTx2Zf%2FzCBvnmmk34q8zaJFTw8llIFeVAaPTJBu3eLsAgV%2BZTUKJV0IF7lSeu5%2F%2BrVA35DGWCEbtmlxhkJuYB1ZVqi4kX%2B0D2Vu%2Bg%2BLj5fn%2BeyLW8rHJCf%2B0nIWjUN42VgjhmS3mzYZFbcEAy2UsPsaUAoJNTq7NIDjFQYn8IGmx709f4pLQ8W8dY7vRVOeS3x0aSjdUKltZNCXK8N2tB3bLa1DN2YkFaoEM7aCiGUjNoHwNjenv9%2FAE3wjb27uD8OrxTxJ%2F7FRadAxoyTuSK5sJ0fPJV14LgNMtDwASuNLR4GdSSJaQeqykEB4ZZCJNDBjFQylbRDKCZRivzXngl3Luk4e0pi1Xh3oOK7MEyOrWgMIyx678GOqUBCltUofuq0I%2F7CPp8o94IEftVSVXyk9dwFNKNkG3zlCmjPpG0UtZV%2FuqYfsmPuwoLE7q6fwsK8s5iBX8MagbGA7kHfavWO3hhxLTIE9gMIG5PKg6pFciYKUnHEd9xdRGZHRWGXzly%2FKgV0oVanevRapGMOQ6z%2BYn1zb1EGf1Hwi%2F9qyeWdBk1XfaLYB1Bfwo%2FRsmcGm45%2FnadKFmI5rAotsPeBS5k&X-Amz-Signature=b7d4f51f903d1ae976af39388f6c673424706f16292907c650ade0ea3868bb0b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
