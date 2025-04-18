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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA27FSJO%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T220750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH6J4zRMY6ZH3qfdKtjxIi%2FHqwymWCQ0jOLld3Y4l9CtAiBYS2g91vMq2R2Eemj0oW%2FKMZ9EVptN7xX6SaWl1%2BQMJyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMA7jPIJpNTlHxa%2BRgKtwDy0Js5XqWtQV5ebt1dBMa5gFxWkxP24Mh6iwq3d%2FKEl1n6SFxYaaEWgBWGT1X1esSHnLraOcuCd%2FeLm0gc0fdTz6OX2za56kNvNh9i1LQH3R3yOzWNxzvU%2BbcusSx0rlfiwmXgjg1gRhsQ1uetde%2F67wmohfoSScFqpE9XCDPNrONvkmFmBGy%2BO1L%2FxVD2qSUoUlHc9fkEb7CU%2F9HRULZtAsUi71fZkWlO8e39KaBMtXdMXgCe86ty68jzPqnAXu%2Bzmm55dIXUpouNGkwae0KRBjOujrb2gGy9qEzPWk68ffKqHIqoHu0lRH5F5ivhea7No6AsZaCNgF4OPht9AlLKTYau9rFJ4hyBhLGNdEKhChiUKZIZm5nCrZEB5tiR5d%2BmX3rMD9ulYMhO6L4z6soXWAv0ZMttOwpWmQPgksOJ0bn5u6q52K9fAQd%2BxECB%2BnlwRIHzHQmIOcq79R8se4ihyDJBiJ5D7u915fhWcMUG%2B7Umb3%2FpjxK0CtaTS8l4Vgfml5TEm8ges1WYHLLK188YhvvoNF0DO9jWaYDGPH8X4DkHKk36aGWMb2q1p9Y5j%2BVz6qvU2Uays6xYTSfKmwsHioZS5xwGI0hJAWnL%2BHhB%2FEByzryADWDXnoS7qMwxJiLwAY6pgFl7VyeGKyyIDfIrOKsuDdhjwivOW7fpK9vLwNBPGfqs%2FzlvAJ%2Fi2Dk90oBTwMvoPALlsDcW6OchkROOdJfxXymOyLMl4w6g984fg%2Fdr3fSXR9kGKSH1hyIAtP1A8Iy%2FqZb026XDrZqvymjEdp6LBeK65lS2F3KB1WVqUsXbm0NVHTsxvZwKt48RCGZiBD%2BF4W%2B0afiN%2BskCbJI5rSoPqbAvr01WujZ&X-Amz-Signature=702bcc518be4a5e17f04acfa7c652ffc9588a07b469ca8fd9a0a8c0e5999f2a5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
