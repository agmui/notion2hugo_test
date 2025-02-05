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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCJDM5IG%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T090836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIHi60%2F3KxYX7QzpAXLw5sjduLw%2BimBESzWIpm65p2%2FtbAiBdoosZgTV0h5r9Py5AmBlh7gIPMvKmBGB44M1yJQdogCr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMk6SVZPllmnzV7DnrKtwDYbFdva%2FMwe4LXr5HAF3NUU538yC8hsayVXmDhQU2ShFTZqmdNvvKGLj1qtW7F47jAc2L2x3kZN5RUgzuBpddcadgSLivCISBpDahHHezejr2g1vk%2BGWQgmTBvo7JwqV%2B9pdjpe9WYe9pQAJe5Z1aygyYzo8%2FGb%2BRz%2F9YdP6OcsH1EkIUWv4oBZM%2BNUv59tuTnzd6k1pEDGnqZaKS%2BI4fESfrr9LadDmpoE4%2B2Nyhs904MicgHhk%2ByiVbuXpeTUP35%2FBEOyZ5z6CTV%2BHYI5VpKcJ%2BTAl8be8aWTIWKrx8otZND1MFb6LI1FjXTMgQlpJ4YPBRzVv%2FJ9FFuzpG6nB4qfSTF8lL6HWR45%2Fms4Xf9ej2nWPEjDTDcwEyYpxNL8JM66UMBc%2Bt9mabZ%2BEeHwpYYIfG1qa4hf9fIfaaQNHyAW5u6%2FGxbX93sCEX1QMzoIlWWdM0dpAU7cABBGwOYLf0bAQMZ8YU3aEYBPwwyMBsSvIqfHemGzg47HJw3rz7ZyYq2sSU6wkBBl8lUs%2FhfVu171RHmdhMM1fUOEEq%2F6UTmmsaBnqSw5Omrj08IPU2awbZxTlgTy3hwwnxU3FHkDRms4fTxNve%2F3CekfeENK2mNTc5eeaAYAKZ8YIsOmowydCMvQY6pgEBWHt1QnMKVr3VmN%2FjhXbSbSgmZQpmmQ7q1EGeJP7o5ucfRAtxodIABgzaSD7hy5%2B2NuCvPpHIJUjpjSlyjek5wSRvzggyjUypzJtg4v9Z%2BnNGcZXpHql1tjG5tN0Q8BkOIu8y%2BGNc9JjtS0i1vyb2BEZKybD8ReFCgowIwBCzOFEIHguxaCy3toA6LFds46yfgP3RakPBleuSmzbFozCoDNb3p5ZI&X-Amz-Signature=67db1e2ce0761adac56c5dbe88582cd8f8f8c1d6473a9ccd0658e79b2c53b02b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
