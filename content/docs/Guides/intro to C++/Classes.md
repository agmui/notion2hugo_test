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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A2IY7PU%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIfXp0ZF4HKK0yRI8Z%2FPXM11bfq6eiCqlCHGMNGRfGMAIhAJzxAyikVQR3j5A9tz6KejWXcwTVz8LCGcH%2B2g1rxyMuKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8KhRz8qyMkXFKwt4q3AMzRIJ0VPQIfjISP3lyPwK%2B4miv34o1Gk78PYs13kPNkUgKkvWjMjych5paFCmM6VvFkAGbb1iVwRxnTZkb69D%2BnijZ6wmR%2BKY9jBGD2UTx5Q1bvCnB4yRQVyfaZfuWPVkVuhS8rRkEAhS%2FOXapkl4uZO0XHTrST5%2FPrEatroItVluSz4sGAKqt4n5Lb%2BlQIqBH%2FheYSsWUfo07mhh0RISz4Jfv492h8PUuqZM7MpeqcjiKKP4H3Qds5%2Fei4i8CPl2bXRP1I3Hl87Eqx7Fqx5P3kHWRnH%2Bs9W2Agv8OmRGVYcpCqmAk8LWTUn8ZtVgs8Y4w3uNsOKXHhv8CuPMbuKhZUjh9LtxRSlx3oT%2FGl4uqpMe8UbIBQI%2Fq0ZVpXFhPLxMYkgUKoP7gY1bZ8Dpw9JOZQliWyXwsJYESJlf%2Brcy4xXY4pFMTMb8zpuWes7kIzpeoPrBCqMRT0%2FCaslQc6AK6tyeZD3a2zVlE%2FSdJDwXAe0D%2BfwNg1sIf6HvfHBPaeFcTpSCvKDey7pBv2Fi8vLPiUigf%2BvBO%2B2PlJpvh0EX8Slmu6UtJEDQRAcDDJSaRU4MVKGpklqBILvo4AWEyEm2ztFRbgn0SFjJuNXQXhytsgh23coaX%2FsW9saMVGzCT1ofSBjqkARFuCv1lMp8qEMvtqDMNR3j68pnToWCBJozC32qvqzB%2F89RI9cPBHbFDr8WSK%2BiK9URmLRqZp3oackGmcnZndcCuvo2f4tyR0pa%2F89mN35Y8rdOirdMpYr252fqGxT%2F2Q9IHyxLYSwAYzOoK1iRX%2FCcIGLqJvy%2BTzdyrlRuvHtutC1T2%2BkBmfeJHkrH51aSJIRhrw%2FmB53ipNfZ2cO3f1euLN1xS&X-Amz-Signature=bc64892a5eeb9aa99540fc39e06b7a451f24a259126ff2229c62931c77c50c78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
