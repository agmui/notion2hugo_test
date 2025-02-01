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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVZQO27O%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T121141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdSzFEcaSVg1YuQyva0wxtc0cxgNY3mqiDN0WRAGXuvgIhAOsg7Eb%2BAQ1JFnHYmaOGY0LTttgo9CcyRb%2Bg44D5fKoeKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9fHX4fi8tZd5%2FgW0q3AOCDxZlOYEgjKmj5lkzj1V7ndGbgqp2vOcUDNtEWnfckyzr%2FomBbdemOMToi4AGvp4%2B09Rtcj1xnTvjE2ecF7v5HPkEobe%2F2xFcCZa8HGimFWRhBRVkN8i%2FBy8SpXzF2v09eVT91Fk4ucJBzONeEEEgrrV8G4cU7unKjnz8T9QfeN2ybez67Ipe%2FG493s6qxoHdG0X8JlnBLAvSK2nMoBVcgbdwHNcfFanKQzx15RAyyEh2JVo6YT5QCXY7dqGU%2BxZB0A8lclfN5FA8sNpvrUYIZoTgwBEa2WzRCmzh21DctS4xp%2BgG%2B%2By436Zdwt2elUUSHWcCzHrHYRzz0xh4%2BmbYyRceKKrzmL9g%2FYfwBMAVOwT%2BqAHIp%2B4x72gg%2FWSoWLDyhK6pOS9qPBM%2FjbEw7XxBW50OxHB6ZxTkzjjZaUcOSSBTbSZePXqS7hr7p4Ol%2BptuSoqju164JFLIM7lUFO8QbWPT1trzzGUgSSXiQSEj02d%2B80h7VlbyT2o8Ma1ybRpPjV1cv%2FhRA9h9CkdUtQLzEAUd2klFTBAGbHiajD8J%2BbNjfe0fdmylWsHGBCCs%2BpB1bO0c%2Fs54YyV8O4VEv7zJWzN7MfsyLkIEzSpstOruYpyxxx49KVOP94%2FQwDDepfe8BjqkAQDX1JVaCduHJAvNo6DOwROZY%2Bc%2B0Sxh2VXhmnGPc8T%2B3l%2FkIMtt7ByKJ0g5zUCJH71ctF%2Fmko6%2BK1tJ%2BkyR%2FCjy1ZM352hej9%2Fp3kr5P67oE1eA%2BtWNmrzjhwQOPz9ZHbVXCQtr4f9V5%2B8HH2FHK58lXD5Wu6SLRi6ftI1F2DKI6EcdFqLNTfYNApW1k5BEGLqFELsh%2BB4OSLhDqOWf8EMKFm6r&X-Amz-Signature=ee0a86c525302139bee4848d1d1dde438091af1db4c15453297e0aaf56685ae1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
