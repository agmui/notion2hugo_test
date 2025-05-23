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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7T6SCCB%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T150840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDATV7jBIYHninJHwSQkaGV9xcPx10rlL%2FH%2F8fae6bD1gIgUaOiBJMgQlXZQQR8FIHOqRj0pv6e28OqbKaTl36Cx5cqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFWlqJbZVj7wZknuOCrcAx7z5yPdr6LmMfGTWohLdk5u8jjPgZ3Kjj%2Fojs5Tl1p5HKBWJW9cGq1NVZsiAUnyC6Tgv1Z%2FFOSGpYOXO%2B5E2BIHo96L0oqoH%2B3D%2Fcf17fUIPszf%2BQNpXltOlBn%2FnYHx0NXND831D%2FBSg0Ck%2F5aYOQMquByK%2FLIwMJzLVHjqJUnL1EKKjqfoyEFYX5dTbWmy5xXeA%2B0Fjl3QJ%2FlTM1HlEFK7JBgRaPJEyzyNPAAmQWODRWdduchK2%2F0uqgzX%2BMaqtLfUfyzdkaxHJC917OQ5KVImqnvEmvFw3E0uHnRTENKgRt2Ml5xj5r64zigx8VDN%2Bq0Pqqp0lzGT12pFJJErV1CpGrlc4r%2FW45TV46lP3phDKfnotcSFJDin9smbJLzMVtfbcwRHNtmDFvT5AzjZWh%2BVkNBCSckyFIEjxucaUiW2kG4yx%2BJF120Bsb0RCZamHpRFGdNW6l2owHHt%2F%2B8SZv6tmmAlZq0dyjaGz3u1NPyu22wimFTPqfZlx%2FauU3J5aLsBZA53GwUX7u7xznGvHJYFG%2FzBxGLUiizPhKXkMJYZB%2Ban5ZxjGfT8pFreS%2FMyoAC3eG94Q4PzVsBd4fdBgOloYbJCKofPuvzoIgdNrIUJn6NCD%2FfBiASfVkh8MKSOwsEGOqUBaQwFj1odm8c2aWY68rTdx6Wp4o5s68OjhJOqHXCqdAVK6oCftFLbfkvtS01s5EJxjirR8ifhA7OHI%2BoN72PFTSYTLSfaRSUzkWoBthi6QczrIsggWXrgWl%2F%2B8%2FcePp1d73gCD7Ii5mCgCxbOgSGTPijpr%2BetB9ivO4vngVRSGDw389ebWfMKy9tY3UBuz%2FJW1OmLYb6vQzxIn%2Bd%2B6vQeaIQGDhgx&X-Amz-Signature=8f3bc7e458c40dda7dfcd0001bad2e354415c8e2004934eca051d08237e818b4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
