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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG4AVG4J%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T090707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzCCvO9CEMLTIw%2B46UtR3RaShz%2BZvyaGO9X0Sro2YOYwIhALsTyKHk3EwHKh8sJkthi%2BZSIR2SDEtCukmAL0I0ym2QKv8DCEIQABoMNjM3NDIzMTgzODA1IgxDzr%2FUPL41WBFzkJkq3AME1jvRjDhcG40H2KEhmDmA0LgS8xpKshP6XM%2FS%2FtqouieCwrUqDJyKeHYJoP1FJGoGu423R%2BQOZV7MZqX8N1a6XiCS5p1voO1MP7%2FR0YYgnho%2FbTvL0yIFPt3KlVS83YBsUNm4EXHZOdjZ0wvl10sZa5PXTztn%2F9u8ZxufNZTzTGNLeYthp3CO09zUj%2Bl9O%2BCHBEG3RjY7o9oRRV%2BqRWrkhB4zcv5uFUKBHkVrMc6xPirPbDGGB2e4r9KY4WKDDeq2Eipixdusm4FSuH%2BYK3ZsYs%2Fom5bOL%2BPtXEx9boyl6nCLEan3knKgBRsO749f%2Fe%2BLjmtzLOt3%2BSdJ3XBCx9Qt%2FQKGeH9DT2Q7pE02uSOPG06dVBRiJddxKSJlqqhBr3LoGUqMLjziujMJnisFUitIXimAD2DGkUPFHRtg1QuaN9D%2FzXNI7rb1zUBeiCvwcy4%2F6JwLg1L0YUTONhW3wF0G4vPhzQWOrFPZisEKZ2X5dZeGk%2F6OtougdPDfP5TQeNRxOzk2BIFkOYgL23UicL6BmzdtAcj%2Fvm51ptqTlbU%2BvFzC7qwSbaUPe3%2BdT9m8ZOJEa%2Bnitvorna2vueOmQwCKYAC%2FTAGUP2OMeYn5uG08u8z%2FjwVpRkXYaKFHzTD%2B%2Fsi%2FBjqkAXIMBU1E6KoAQwVJaOE1BIYskGlquiWxoqzlAfWWEl1mCz6gLZYDnDCZ8WitnmXzOSyJ%2BlHJ%2BJuTX2n%2FjNCqdeeeHwfzu4E8vCUP1nmkpwfZ6i91vKag22mSa0s2KnowigfRABPsYcO7d9DWe00wEffa0niUCDzJXJtnDn74tBzH5PELvVMNEQPg5KHrW7ldE51UNOhwWAQw%2FZI30D80TA2UZovU&X-Amz-Signature=e5ac78b5d1f6c52cd9ae30230aa51fa5123739d27aa11ab2ff039c2d327ab6cd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
