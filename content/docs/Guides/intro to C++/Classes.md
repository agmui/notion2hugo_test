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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBPIQY5X%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDb8Tb2RUY4aFrmyqMgzInGH6Jr4gXECB2mJdNmmVBTwAIgLTfhki0UjNXMzObVu5TJHscfz47ovS6ostkfsVylzc4qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGgAD8aL%2FPHOMLDdmCrcA16IyhfbCx8flgsGbaRhO%2Fa6ZUftHlUkk8Pl3PLMhcMCENmVTq1edlVL1HwbNtgRrSJufyt0FBEjQ7CXLgkkmd%2Byi03HVSfMC48ZHyAJEUJBbb%2B%2FGX%2F%2BfrbE7LpE%2BmcZNUbPqdi6e52p4D3kUKahDXlwQfM0bWntX7HFXVtmps6ljWKtXXQohJ%2BQOQ3sIJ6wfoCR5E4LzslrIAtvlTd3afLUswNOvZNzek9o6xZm9LMH3PO6c%2FCy0uInMq%2FFMzmeCFZfjo2u6IuvQS1tJC%2BLTHEL3h74bLQ8x86z3YJB4hcKDHhM1Kkp8OWM5osiChL9Y%2BhDDyD%2F%2FCQDjx9%2FpFEnRgD7wbNonn90vHsFPjZZmJAqA8TcabMFN3KhH5r%2BsU3t171kkUql4vQKUSHI%2BcEK36CWyrMoGVdVeIw8xPgrdi4P%2F1%2BX3vf6LOZU1WTKT%2BV1%2BwgZOtX%2F%2BdO4k5jz30kCmFhDRFv%2BvT6u5HQqA2EtpJQf9AMPZz3Efg5CSpLHaHK0k3IQfOYx%2FpW5prtrInMnErRBkx42hnOpIMTGMGCQL91gCBizi%2BgvqxRPjUEeFWIkP49DgAhO5o7zWRDpLOvyumChYRbV95p26tUeZJmd6mtfFcGny4D%2B2baKRYcRMIvo4s0GOqUBghGQFvi8tA5SvHskDBnXW%2F6MZhhcDTSxjQOEAJ1k7FCLmYjNrAJ6g6FwpUgsQJ68mpL%2BNx6Hymdqpkod1EzmEA%2FR1y5JM3duOES2CUaKuWZnr4xlpk%2BD9EAg3%2F61Qj%2BR4lKzoiin6I2HSMKf0FmJlHemEZufnlyaSqLoA4ZCFf76hT4hH%2B9Km43FEzo9HUgPdGCgd3SyrvNWDB6pH%2BKcAPb0P1yJ&X-Amz-Signature=66e2966a38e3b84319d602c4247b4eff73d03e306eb32998c60694a7ec2948a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
