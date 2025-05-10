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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VAZULTC%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T040936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAJR5C%2BZa8CxktjE0HxiHzFa4TbKKOqdkSqKpR5qxKA2AiEA3JC5V4EECsriQIlGs%2FNXnBniYm%2BWBDS2R%2Fj9e%2BCppRAqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFP4kvjtxHQ1kXiD%2BCrcA0EdYgM2OG%2F7v%2Fqk2sYGTxqn7v3vPfvbjH9yhItEr70kcbPAhTrUNV9I%2BlHpUePaKnpHP9G5aPc%2FvHK10jAwmT6YJyixCv%2F0jERduRxtqpuV6cNpu4f2l1iWqUo4q%2FhF%2BncFb5rPVmVGqs1WXsXmOjYrzr%2FE1syna9q38Uw8uRQKrU4plFudvgi12UlpGy1Vsl%2ByL%2BYya9PRr2L8l6APIV6DrC5ztv1NrIvjBHobZMbFeC5PTE%2FQ4hWA8eikGBZSClzxxJcbhvb0PFKogBwrn6Ccl1EzhU0sY8yn47YgR0PjNLUm%2BkX5yelW6%2FOJA2rSSNbJBx9wh8zEbLD2TikqXJbweAB8qd09slUFCSsMHQii5kl2l5QbRiHCQsTF9SkJ%2Fcu2v7AnVSa8NQf74s74hwKd4bHaCScbUT3Cw4uQebdHKIG12WiMNTFRz5fDcOU%2BMp5nvHBuVA24SvAt38SpZcJZ878XSkfu2rQPzgN4Or4jWbY1ISTkadH4T9H04vPnyaWD1y6TZ%2BbzyIOnuH8kd%2ByBZEO2m7%2BvA6GGbDSivfLGir0gYO1SLkzxnOScYYwz9IXg3NOS3dqm2zyWtHi76IS%2FEOQ09XGB8ssbUgXWKIupnp025rjpBNcjtgE0MPWg%2B8AGOqUBRx7z%2FYIn2eWJRPWk3dh9jgQoXGTRNdr83bScTB%2FhSFZoFqadtCwwAK2ynCUigB4K9byHQj8e4bNnMuRr1Rbx7nlWNOftNZiFYDuOhz4yab8epraGTQmqWnDZMvjQVgkDHhtoM1GZs6Sk3kVfthJoQEc06JkenI1qzTLUIq3rmTYPzAzN5aw%2FkgW8C80EyHokHVO5kbyHf29jBFM8f2khg2nQ1QqI&X-Amz-Signature=2dbe74be4e56c7aaafdf2e212d106605cb0a52ef8d3357308255911bc7d9b4ce&X-Amz-SignedHeaders=host&x-id=GetObject)

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
