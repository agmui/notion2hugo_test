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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R53DDQW6%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T070738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIFs0idAep1vSl4jbu2oFsIHpvEGzX3VOY%2BNwDqhSrD3yAiBcI%2BU9MCQmL2SV7%2F%2B306iCVQa266opobqxKEXetwYkfCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMP4D8KRVi0vFo48lLKtwDXYpaD3Pr5%2FyswzTEon57F8sdEcD4vQNkbQh%2BE9f9NBwFupNXUB2Htk5wWdkJdabCxSprouC%2BdNwBLqsUvP6q%2FRoKhCKzn3WfC151gsJFXx3XVa8LXfGwOA30FUa3zkaT9jBNP%2FiIGPcPNCqlbToHDBWGmgtt2aYmumsE7XJT1yLHmMmRFOHmzHkvWVLMwA2aN83%2FCadQtqr%2BCfTbquL%2BV%2Bpr7tpHhhY9KSjYOo27jd9Dv62Eja6BG%2BhhDnAVGjpgLvCVKG%2FEITkBrXSvS7B9Aa0r5g0ghXBBY1C37kqEHZ50riQKvu%2FlXaRHJOnjoGJmmrEZWyzjYXAbNbOIyVUJO9oZ3hNR%2Br7B0yW%2BKvJ0SXpgNGhX6gaXrtfLEneNoxCb3E2ICXNzY9JrkHRfv4lf7QIj5xcyPc6I6NAsEF7HzOjjAmq3R6lBwMIsz8ZSb2unpxWPbvvVkkCknwVMoRqtQDgjPMfrjTsbwcbUpBzpnD7QGeMcpn6f%2BGDIatJZILi0zGglpL4tjVMxh%2Bd%2FW6NNGH84ZP0GHWgoQVaec7XKFFS8Mr3c58MrkxdKpp2j6emK4jkicd3IxqVlegi4IxWcRp0CCUr%2B11Oo04KVNdyEdJgvJKxo1766BLSCClEwiLaRvQY6pgFvhS0v2IzE7bn5YZkGWnUXwrmhTuNq5awnFnbZgceMbAmSaZXq9t880pDRgCeLbpcHa5vydv%2Bb3Dlu%2F9zNrzttjLPq0kawmbzLhtES7foSEYF3djXoAEo1tugT9Qm8mxfb2XOeCLGUe%2F%2FwK3z99YqFHUFjK5hvO0VRgGVsnj04tXvNgegtsE%2BKXdmFVDvEfoz9S0U%2B0lhJHrKMB8VKJkJebXMnKS49&X-Amz-Signature=49278fe68f1e4ace13a1d57b79a33de54c0109146eef93e8d97cc72b9338bb9f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
