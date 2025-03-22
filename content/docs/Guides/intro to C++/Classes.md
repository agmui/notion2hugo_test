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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ2CEOMT%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T200754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQC6bBSMUTOkU8ixFtgOfOmH6Y2lUDa8sUVhQECNHj25swIhAPrE8bIENA2VK7K2h5RW0Bg806TRoYihcfiFkPRUToVJKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgVKvj2l4bANKp0w4q3AMucvR1ajKHUTQLLqaceoxVNuAcpFjCRxp8cOFbDcv5nFypePct3mBj605gkhAM1vnZqDFRiMKC%2FEbNXd9Wb4%2BlwODj3OhRE2JrBMz5sPztKf6CH93pF3MaA1hUbq4Sen5ZJutepAFT9zylMS7wwDGXZO9Rj6On%2FDkoFd%2BYunOi6FJtpVoxTeL6gUxJ1nxbIf8sMvVCqzh2%2BjAKRIIxCGGymU0qehhMvKvmBq42cpxGna%2B%2BzDzCAJO7isKNRG5rW5kegP%2FcEUcEgR2B5oecm8v4kbtiWiZy5OI7Swt6jpde5ahrgdVlzJn33Z%2FaI8H2bwDao5swTc5LxlO3Z3KSbIvu1x0dMeQuXpFEUAub%2FT0y8J%2FGrgcAfrttEn0gdYw62bVZDB2UD0%2FOzrjbAqAW8yYz8agUitA0rFYYl56EA8CdHHUkj%2FBQj6i9VwQAs%2FRUxwnPaDp%2B4ZhOhcqeu2331UvZv%2F5et0J6BF7umLWMVFfEOHVKXpw%2BtIugjhwycIaE0j2d0p4JDXwOyxbpIfJUlKgVfeXrPp%2FnuTMuTmB4BMBnir8SfqIBW1WF3zEIgC6hR8jhTWJ2LeUHgrDW1ISl8900hVwGxJHiWRb1pQEwfL7oDpyc3tZVeYASggq41jCxmPy%2BBjqkAQYbeW7xuaQOixHYdsxd7Qk%2F%2F0%2FwHVMqQIUO4kpdTKzT1X4%2F2LuTg1pxrEzkr%2FWnREmu89FNf7e1N1QaQgtahDNYxPNYRZ9F9%2FkJWLEUacrXTLlm2AB3tsO7RSHy1%2FRsM6c6t5iAdw7gZg5aEMgD7Q5nSnAWYdPdouaSfBIfcR4KxB9hkLI7E1x51QWLyDysfElNlk5Ftf1KTKUb6ZtL%2Buq38lal&X-Amz-Signature=f926cc7a50f10a29ac1448021eedc4d76278696a32bc9bd39584ee5a470c4612&X-Amz-SignedHeaders=host&x-id=GetObject)

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
