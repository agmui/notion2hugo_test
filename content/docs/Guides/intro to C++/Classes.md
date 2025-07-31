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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN7YRMKW%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFiSnR4G5ehYplqdEP8CRSGQ2On5zry7%2FDwSu%2FxmhSmwIhAND7VoRm0DvINFeZHL%2FzFTcpZJbtY3%2Bd9o0k5%2BDsQBVQKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwj4pOO6xJK0VHFo4Qq3AMjW3doz2F8vQnfKYHJQ%2BkjmPiekKx76HUXfAejr0JGMPpRDzmYvWYDKZl7wMgoLCKxb5%2FlqtAd5JRWp%2BusrDxNAgZsZPDIVPc3t8aEsaBZ4nvugB7ZgnWPhEL%2FhxixPR7ayBHbhPlWLL5z7OQWt4K6slRWNUsYJ%2Fgb4b7rRqZIGDnTiKijJM18DnNYjzYU1nO0J2FFsMvpPt%2BOiFuLs2OnkPgokO022wtMGz90yLsxKsgsJfd%2FNl%2BcyH6VGX5sG5bEE5X2E2%2F58YccS5hrU1qIEod9qWPqSDCV4WL7C9xMmI9o1BulZ%2BykMbTtZB%2FOO9RWYM13%2FjFHyAlXXpQZR4dWrAIxPt8wq0caepx7Kbv%2FayoeliGQnSrx67uT70IrPaludTA9NCrhHICbB2QjuSK1aCaO9I8aW0SQFsuQTGLlD7RccZWiLka42a4l8SJ858etRRYpNKoJOo2XRuehd9EXWEsDK48R5%2FxOV0MBBbsVAVH0SqmpkYfSf5HkH2iMLm3bMscEoDqxU4OzTCcd4YASTLFw30oo9wQfudkqkXEserezcHGQHDVVi9s4r4LJnLxE6TvNNsOxVF%2BtcmXhVhAorQecIiPZDNPGDX19CQHIAZO64h6JheHyNSOyljCg6q3EBjqkAVZDNwv8DJURl%2BetS43y0ZLuJyCZscEfGkkkwRKEy5fCBFw%2FgFV3tbfUnZfJIxvh7ueugkZiICf5VajDwIMQofCBYe8G%2FCATDI9fSXfImtTW4dLMtHVMp%2BPymBiaiDnICWBFUXaRRGGtGz9rY7j7cFfOCjp9%2FVsdovSu6X1SF%2BsrOUObV6ls8E5%2BIhbB861EbcBbOLqsf6uh08nNYvuYCsCxl1fM&X-Amz-Signature=41d57bfcbf500d5c3a2fc364765ba456f594da4e6c2e4748fa0a4b59ff9441de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
