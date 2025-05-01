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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FAWKSBC%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T004533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCxh%2BlP6xu%2BagPPGTBTJ2g%2BRuY%2BV7YAcYTKKf0AKBjANgIhAJwu9tr6k2aazNwWn8df6XBySFkmXflZFHbPU7Uyp2WPKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzc%2Fs76zECWJQozG%2Boq3AMooTngNfclmtg2VuDyG33B7i%2BX97U5J8roxXhD2aBVQrZ%2BEQYORXmwSzUuHsBOGVNzukC6tL96KUTiufjokTK8L7D7eTugUv%2F%2Bfr5QKG5ERQHR1i%2Fqmbr3YiX5LmcQUjN%2Fpy4LZAqc%2BqkjdTjMuURew5dpWVxJTyzJMoYFHUVICDDbHn1iiqO3gfrtEifie9BpGvGzNCgPU3yQRkhnQ2xvEi61zKtWG6e9CPhU9vjIkEe0mUxmHvgohmIIGLdc0Kevk2yENcNudURJwjaQlHBjXxJMF%2FJX8rcxO2w%2FzE%2BjVM9cEM%2FbuUG70u%2BxHX15V3bnv9Qw%2FqiYTp20D56lmE8c90k%2FiPF5W9KKdIalnaQwh2DcoaJHZcoL7k24PSGyvY4e5Cc5RKsW2bLlUBZl%2B1N2ERlZcw3Ey1F9ubaB51WYjAxj3FDdGH1TLix%2BT3ZWM7KKFBDbxVTVpy7XS9biS9noO%2B4GKaKT60QJ0OMGMm7fA19W23W%2FszJEiyygwusbZbXf94lH85Z5mOAmIhf4MqSDg7%2Fyxh3vfzrFJqDouA8LDDKQCij%2B0qMojZlORyC3yxkuJF%2B1BVmykEK6HbmB6bMtQeIxZNDq%2B4c0eqJOsqLg9uWuGqoEVqq1qxHoszC2g8vABjqkAb5suAryZvcvXWLkn2Hcgirt9cicdQQxHZFUs6Lp4k6Zxxsykvy%2Bk09av4qoTItazH%2FQS%2B6%2B6fsgNSLY6phQWH9w8hgVnIF8zB1NsZgd8sn%2FdT1bOl0YXU4xK%2BRrUhOJZ1R0Hde8y5EXaG0B8HIc%2BiFNyGHMvWHdw5Fm%2BR7mVYbd7xZgJ3FdPMZAAeC%2FGILgT1LOOwrT4UOP9Tb2vy5A3XResrN5&X-Amz-Signature=f04f3bb73cb5aa46b1c608120f01da5f71b51b6151bdb2277442196665f47ba4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
