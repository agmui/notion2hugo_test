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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JHLVGG3%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T070910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHCgKivNpV8DctIScyDfBB9obUhzv1YsvbdnGK7NqVcFAiATSw3vbPV32tCNR1AC6UXuXgxTNep1I3%2Bjd6D4daFcMyqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8r%2FyQvCWQOR3qDHTKtwDCm1j2fwEjEAIgW5LTdyD0i3j5AKZQ%2BKPoMCTjG9DcbaWZHjHtwqLn9S0692FP8RNR%2Blwa5FYQMiQ0MKI3P4JMZGNGCQGrgF0DHCiM73CVUPf8rY5A43%2BsNyTJtv8AOnJ7Z3c%2FEAhAXFHYmFjoNK78ijAJcAhlFEwU3yKad5oL%2FqdVaOjTldpiXktOkmhGJx5O4Hq%2FZkIDwvTwtHKSv8OyJWt56SKBEWnESsfjQJhJFbVzaxvFiBsL%2B8LnBGkmE0SbzrVXhjms49b9q%2BHHKxC6zLgRdMbD73QHvA9%2FpHWM%2FeMzkX7ooCTNMFQQ%2BlDSTofoone%2FL1hsygiu9Qo7qyc76aJzTyf1X1Jav9NNd7F1D3KLe3FV0GSk5C%2F2pJ1mFUnhlpZYMEGJyCpE8j8BOcbjXQpW1ecSu8%2BIixz9OxuLZkIFC44Ec8F3yoKiaQhyJrhGS5RidOGc04fgA%2FLOOYyDokc1JIcwXdxuN3cOaZfwpfH%2BLbfmClkEovXLIjjO27fO6%2FXQmI0XKzJdshE%2BcuBpZ0WHzCPckRObANl%2BohTkMw9vrneWj9XfiQMylMb6kJMZqY7A8BBRGfhc9cFDDDfv%2F28hwRSUSBZoUWNqTtq7Rn9IMw0CQP4Atzwj%2F0wuey1wQY6pgHApq9yxxeUONpt9o%2BeUf2LIlGnJAGap7D8hHfYVuPei8sa5%2FX9wz4VJV4grSfvJpQ2TWYmC9UMEnv%2FewXwWt%2FiMT4xwpCGoJuLf%2B7ysuWV4PxgyHFS4GPAN8qziZ9C%2BfHfuAEhERnv39REof%2FFWyU97xYdzRJYtlnKjdxZuMKu5Mew45XTOIRuqufZNYn2JN%2BKOPQcuq0eR0VAPaiSbM0F0589DdkH&X-Amz-Signature=f2f342c819e640ac889f5c1ac5d6c2edd923fa59f6d0c33ac1c68c553f19f564&X-Amz-SignedHeaders=host&x-id=GetObject)

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
