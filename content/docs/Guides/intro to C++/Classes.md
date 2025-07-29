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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T44SIFN3%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQC0yTOJfn3H5tXrBVT1pbsR82GzXN%2BYtcmcjs4U0oZaBgIhAIhJQu%2Fwd3FzSVNv2fSIvyDrj9yJREcmaBOPRHCW%2BlD4KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtYb%2FHIHVgY5eAuIcq3AMQsZLKgdBA6Z1ltl%2Fy%2BooaQJ15Ihq%2B42dvkFlF%2Flzz1P65sMXKSqNGokxX3egIJ0jjAW0SSwuJEUQcPSajp5iDZK9ncgc9TGOFMJ70isznJs6cEcN46%2FQqKl%2Fofl4uRarXyVU86VnTMcDpISQT6p3BL1D1xuiDiZvWC4gKr75ugXHWqlwPxAmWaqdgkwOvtSgOAg1RFhjHq83JJyUkAUg12d2Tn46tJAiOmq3n5ppPpHKm0f4y6gdTDv31EyCckHoYNVFwMHr%2FeKpLnXQl1hO8S8qbNz4qPxvRpBzb5oIeFjSROkx3yE7DQqKCqlnMbw6dIpt3wTHrFMfScTPjY1ntaruP%2FDF8Eo0Eg7udHWmldP905QsasFnK83M4anbaz0Q07o3sQnnmirvZnRND0cCT%2FjiI5eAW3OY4obDcdK%2BBscqsmVuZSAWECWztqmYaJKFIBUZ7tEaiWxy%2Fpbt91Y8%2Fp539oflGTrejXZQWPQncWbsDaVT9AsC8W2DRenahO9VQxMdM8jWc39f0PYXvNXoTrf7%2BUmNP8ctefh5YHTToNvJxkjUUlJ5YlibQfNBZfHY8fms6jBVXgovdiBdW0FuhNPUHgjGPSw4lCqzcUyxjoxSetmU8neFlBsFvKjDBtaHEBjqkAReeL4zuAqnaZKCRMMXdbNoV2CIoJIWpZOK8cYFvwnK6l0xd0Va%2FXeG18wZdAoFL9ontsgasuurFWb%2FM%2Fb9ys0%2F3jsg3TcGOAhPeM5r2nmSW8EGQcajmUDG2RCqL6fhbX1AZIJEQWu5UZJggN5hYRy16k97vgVDC0JV3DY9van1J0uCti3tbEZMzeJcl%2FKLCh5bjWxmog5buRJfd6GyB22h6HHXk&X-Amz-Signature=1e99cb9673b1863e5bee0f81cedd9ad4df4ea644fc538cbf4436d1750142a90a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
