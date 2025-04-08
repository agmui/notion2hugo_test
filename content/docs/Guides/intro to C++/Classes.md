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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMQRQ4TN%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T132036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDijAbISuSKsY8lzXkRS4AcS5ml%2B%2FqEuw%2FPv0k8XkXBlQIgE9bNpuUrtS9qeqc%2BTYGApQdqB72C3QvszWYU3qk33fgq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDLz0ruKYMwmg6l1q7CrcAxAgs2ZWVu4pXKgZfzWNKfzMJODF%2FqwNKbnHVmSa78NP7Vtjmxbf6eoKF4CV6190nWMpCuZmiVxCpwNQ9i055T8p310GsHfbMbGmDVhPZOlDZoLWalGJvkfS%2BzT%2BDjLBRz3HsIILCtJSMBNgObgH3mB%2BAaPJQqK5qxzzStDO7Hf0qx61CAQScSL59AsGJI342tmfjG9nIA0btSESiseRfDiOiDGyIZMMTPxr4rwzGHkBtmxalu8gb39NZ8KlbqSp5C5wlKqOd0Jvr6oJbIvyIzkRuOJE3pH%2Fu137u1GqJaY%2F28slm5SH82k4SCoC7FwwgDpcs8LIOA3yUHqRjeuas1THKGNew%2B5ETkLvPSj5728ccDXsZtQZJqxnENL80szBzjrXpJmy7TbYaRNmRDRKuLrYGKLa6q2LoGkCh7FsR7eRGaDVJbzNHXKt6zWeljCrVb4l0J6RAIoH26Cj4C4JDF8fEHrt3ayLnb%2BGttcY8nNHcPZl1yvjATrYGkPccq9WSzmYG3%2Fw2Aaxane%2BazutV8wnSD3J%2B%2F9MYDFD3TLNF95TTskWRLGqsk5MG%2BSYp7jEykO3G32Fm5Tov3lavQG%2Fzye0k9DXfEUJamBA9u57KgZ1awQg8SMmD0HRsjaDMMu91L8GOqUBxRaT92xKi4PQJCOu6%2BF8yMOTiQhQTja7pRrsaKDobQGxBgUhC%2FjI6%2BV7PBxZjhGCXOqgy2ok8Em1dyqPFLVajqcZQhStRektrvrrNiRc2NGzF8ZiDeiltaWxBxM6oxddT1eul%2BRCMv2i7IraeuB%2BceI%2BgNqxvm3XB%2BlNkBuKcnIB6Byj2s4UNlYRnS3k%2FChXMyjsmmWnvSkoxfAHWN5X%2FR8hunf7&X-Amz-Signature=1877971c1307b5d2bc09ce2d7d7ca7dfcb4ec4162dc083e27cf9388d9f7cb05f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
