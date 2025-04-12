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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IYUJGTI%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T170241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIBSquNE8YyeRJZoI63ysqwmFr%2FWSfWSNsqfFa0Bk8iE2AiEA0EThV%2F8aj%2BlqG3UxGjGd1rub3ZTLoIR4hfL8PCR0fAgqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIC2r6JJ2prAyzDcWSrcA5xyV7mMCsBHz%2FaCgOwZ2klZi4JKjMr4WOqMU88BZb%2F%2FmE%2FREv%2FEedW8B758tK3h6woXuc%2FHvHw84LYm%2FzzVUh27%2BnyRWF2mStAqf6uvw4M3q2KoWiqvRpAo2h8gUGe8wDKvY61ttY2D1jsxKyf8tQ8D0nxLnepgy5%2FZXO3A4w8L79KPh9wNZ0PXa019mQci0oBH7YHTYbvytO966x6dwq8dnUNXTTiKoNDsGLm4mU83kPidry8jOWUQwy0tmN33LSdVDApxTuFSUcrdcRKaToUzeThewvoTqSdzplFYYlQlUzviqzaaLFct6QsVEJ%2BC%2FXU6QqrgVfcdN4UVXdUW5hNISUuMDz0H6qJiG3UUlsWSxPm%2FFO2ROYCZwSmgr1Ca8byqQPDI0bGHfZ26DAdc6ScgHblMRZZblJFnIMxCio8uBWX5m7%2F%2B5bC0eQsHmJHX%2BI6Jy4o954dd3dsz76FT76%2BLobnVO6U4PnOIvdNOTnBxfqM3xJ6gIlezjBGY98wKcOBl6PDjpjDtlmHQ%2BXwYlUeWYILj8u8h8RC9vzM7A2u%2BoYYFer5zj4urDuLTPnRXOOSM0jh%2FPzxUUibSGgObHIKvF0JridS%2FNIkRq2jBE1G%2Fb2QKy5ABnV9dFILMMPz66b8GOqUBeQyidRVMjdRqp9B7Z0PSNIsdrsnjNRqjoWsLM3R6XjTrvQZiJDNSY8sHRPBu%2Fb%2FPqdUkzzXt5SZLCMy5n18ds7IJtX3sPh%2FqyjynesfHz0r9F1UpZOuODArK70cG%2FeI592Zbc6r2WpZJmjoPR5wZp44FNtgJ0lqjQ6TKILlKvRyKnidbNhAdqtS5TzMzkFCQELuJCn0NTh%2BBbXihzTRc8VB1jfqt&X-Amz-Signature=a1a2c6da551b9978bf8a4f910d71acd50b130e9598e627d7df1b48d1fa155221&X-Amz-SignedHeaders=host&x-id=GetObject)

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
