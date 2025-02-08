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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW5XQFOL%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T210209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCID%2BeCNVkKE7z1XVkYYaBDIJakTKDHz%2FKAuEbVgN38HR7AiEAwA8IguJ1lzTMit5WyotHTK42oYKFVZAYxNs04ngjRe8qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG8kZIinebHwABCubircA9fDCD1vkSNB8IagAXUoo4uAlFmYJuKaEWAPKKTyUudwZzhx%2FqwvvoXx9DrQAL77mscy21mE42sa4h3n%2Bfr%2FimMkJRNL9Efx5w00gGRmywRLUSUNs4yZYiYxMX2ek6qs%2BCJJGP3e1%2BKQbCZnhzK53HkKSWTQmPgb3HrkF9bn%2FKXns29XHwBZFLEll4SIBM%2FRyju89aX%2FVsb6VXUV8pCoF%2FMIk9H25N3rbEPwWSOVRxPu%2FsKOttosVBFqSFGpHLQOQc3V48sPjyYbLW79MqyOTgRxFucVQEwEPj6BTxiLRBu48hgJbBL%2Fw607Hc97ZhmHmdleVSZoTWz9U8we6hYT7NrF3wXeu6ZuldHdOpTkkvV0lsp%2BIc5vptjEl%2BYNivNllyqFR1b3t357WPXISDBWl8m1%2BNRMmD3egWdLT4E%2BeOe4zHJ7A7g30wPVqz%2Fj4nUTC35Gj%2BrAcOUSS5g11dkigH1fnVc78U9zrFu1A%2BWSm4XOvyE74gsv4pfCtNSty1mHqKVouppxJ3SWTLp2d6IiVNySlHhKAMTSInhJebGUNWuY1crgHyl%2Ff63DLY9E5wj36aU9DjljUPN1pb2lj3%2FO0WtFxitXS6cZoeEYFq5C83PhVofIRzXheGv0X3m0MLngnr0GOqUBwVkznpboXdilTc4jaPq7kqYySVZD1K5l%2B5aJQE3Wxvd6mUXn4%2FW%2FkQGZy8JxLdJahr7kl7M5zhsJRpV8oAbD5LNrwEmwDnCQ1XyR6a14z%2Bys4fdwP%2FXoNGs8j%2FP2%2BsbhTPE39jilF%2BKvCNeL4GGq9S%2FOEkw1Trk6pGG9PkRdl8GOJV3EVxNTlHwUlXfseFBr3FMMRNs7ptoS9XoJ42XEoj41NLwj&X-Amz-Signature=3dd4878bb2376300cfaf061be9b992727ae1020f72726f53e81e4bc2e5b88ff5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
