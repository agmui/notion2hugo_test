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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YABBM4QJ%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T110205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDG5AlhZFoyyz%2FEXb4Dn%2BUJbR4e6hkWMQIbcdgIhAyzwAIhANBkO%2BYepSJ58qY2XCH12%2Bk%2BuQbpKmzqD9phpQVoEDR4KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1L9udGOpoYTg1jSoq3AP%2BkfzRxnqCIA8efNuGyTNnT9JZkJIvbpuRL%2B2qeVRhB1D0MToCClgrDqMD5ZKoh4qj8hUoayfQ2S%2FHcea3EGZOVXr4ZIvD5FoWFAPfWylzyN3S6wWUu5v8tS0xV%2F7Vb29sjMwi%2BgtTj19K4uNVVXSDVKPcFGF31zxsuo6ghfKPIa8%2FsinXJCT4bc58jHN%2Bt1gamZNueBz7mBw6myMbFNBQaj7YREab83Yh%2BdKpgJBlV2FgpFZu%2FFCsb33cLhWShJ%2FO1xas5mSODVYO2A6ucjalskRZXuA1FEMLCMXgfVJ7z1en6glsDX0SVKvnIHlWaKX2VEs8K9YmM%2BNzEtIPbwVOL1d0ZNLnMoH412v%2BE0Ni%2BkpXHgf%2BETkJkYO3i%2FWYCfkd6Hu0M%2FFme0dDN50tP2%2F9%2B4sj%2F61V7SywJCzrCAIatEtMuJBgnkwU%2BldzQ1faZktlb2uvTHWTx5uWo%2FPdFkSSoEbNkMbNQfj1Ae%2Bqsn5%2Fxezd%2BCfgSEx%2BFf9Bl5eAOEPn%2BkTv3ED1OIRqNhgQ0Q6UIwq8o9HBQZvpLMp3FCpWOoF476uuo3asB%2F%2Fdui9RI6TCAywaoFenDtPjk4QH6%2B%2FJgYthjJ86JBUOUEEIrkaQGuDVEuen7Xduv0%2BChzD4vtG9BjqkAbC40R4qRjNaolMjSVGA6JaBJTJp2%2BU5TC30MU9m0rOS5Z%2Bk1CumQ8QAFY0nG8iV35GNYWDpVQ7eQlQ9Bk6tT2jqyRIlauJjEq6q7nsQXR6ke2sXs%2B9eLi4D2HPeEhlKZYjFVXMRvA1e6ZrjJYr5SFQ8bIhSi6KQEvx8rfbFx4AwQzXc1c96HCyDSjaqg9QPDrAIHCYfk3e7wABED2c50S0umEiF&X-Amz-Signature=88368051286e71a9b267df87ac50c9656084774b67f0ff0db798cdbe21828e8d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
