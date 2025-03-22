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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YGXADTW%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T021411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIA9k1HyGu6YuPbaa24RbNBVVBE5a3SSjR0z3GJWG1JtpAiAsx%2BWNYX%2FSUWUVmjkwkzNrw72a089P4hx2E30m0z3rTyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWdlu2HW7R5koKfAsKtwDwCePYwbUfvqTrVs0yZd98YCQSPhwV%2BAlu8%2F5YMRGrdKCKt5ddVUE18PYvmxlmQJ4AmscDIFKOUNTPj68%2FEIPz27WmTJRHLsO0rz382PNpOhu12NsSOoOyZHn5891sssDOAvJeKtiZIub19fvLIzafxGyuDnaTNXkEMVFV%2BCjNRxwwIVygEBJvHu%2B8dBokFvaGNm4%2BoPl6BxmcyzRXB2VoJtzaDVoDG%2BvoIBxw6fyGOLIWofirHfadM%2B5f2fX%2FBLpCh3BEG1KgAiGyNbVXFCsIPYRBbJKqK0C%2FOpmoHlwGMI%2BJMBMPcoc6KqsyxqTHI9YSow%2BSvlMYNouL%2FhDz50TVR1zkaLZm5XEF1W5fBIaMVAfRdUPwYOSYP3M0fm9hJ2cIhEBRx4Ozq223L2d5BOQY0ckcRi3h8cpxztjsL7hvLikkG%2Bimo2Kd7yVu7fJq1AnpJLQCO5ULVwCEtq2iT%2B%2Fn9UUjF7aZ2%2FrZO0ceJNThJNJSzQVEzjt2jkSIVXVNR224hkq9HyL9Hdlw313j%2FbZ1tKL3bPilR8qpgemdB9zFti4mFEgOVY4dSvWD6vOBjKXkb64feQYpPpY8uIJvDoUML3pejPUN1jctYvoX04eK2CbarBSb%2Bb%2FGhjyq3wwyJn4vgY6pgF9Ukau0iZoJ6IBHOaGML9wmyi0XtrWC68bCT4cPckp6mExi5Rdvs4Z4wmnOUrKsVtdaZmzZWJc0wvJbjEeyRQbh0meN7w7UoSsEc%2B5icmsgRgKI83rIbbz54cGONyj6Kh9L5Krr%2B54LOOLuMPAEtiuiMj1j4W%2FubTfb1sWT8kXwhG2tC2pPtrf1nPponfYYPXB%2BosaXkDxWGvfc5WD8Mj%2FZ99sr%2BcH&X-Amz-Signature=d3e3874293fc1ffb1da251916e02746c9b703b8082a509cca3fba30e8c162ba1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
