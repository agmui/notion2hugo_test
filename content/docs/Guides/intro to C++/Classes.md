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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QGOQFXE%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T131858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0jD7Oks5FNJ06NGs1slYx1DR4Okfx33GvMfnePqIkgAiEA2IDypvLgCsreCVGqcfm%2FL%2FqJrIVANGS1bxz4fxxrB6EqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDf7d07Y0VUky50DJyrcA41bceVOknX29mXTVVCAm9PYsVof6kqomWGwOyw4%2BtvrHyse%2F2LLS22rrWekxt7C9A6zJFgFWhxNiTzk4Hd0YBg0B7zXv5IVn9YfeadwLgATT4r5E7OE8CqEturyMGliJzM0dcZNPqSH0cmz5tKI7Wd0TAh30GGA1WkeXdNcb%2BaiMeURRzdEpB%2FS6tUkiaKl3tvUE5vb1tsio04j0PbUq7t5M%2BVOPm3HXlBheeBFelbUyHwUP5X4SqY5KnncZP%2FCQoVlem3RvkpkVojZxRKbvMhWtppDKT0H%2BH0zKZhCnAfvGmMDXUH%2FpqY7tDZTw5X0o9go2wUG8lioDo7OByeIJknFO7rlMTEtucSkruUk16ywyhH6U5k3VkNAfmdaeVQ7oh0ksqmC87QPuIlrX%2Bwu2k%2Bi%2Ftpqxn2K%2Bx%2B2xmOLJqYvjEihUFCutBcvjbTNQtK%2Fr%2BUzG%2BCnS2l1QT%2B1L0m8E2v4j62JgWGyAzZ7h1haNEqu4Ke4LF7lm1lc7ju2M3UMHtapVFUcoY3eyq5T%2BLwq%2BO6P6Wp2Tc%2FJZq4w82QzKn4sjGX435yoAB4nshOk0V7Gyg80vNljsQHfFdHJw1azRGZ3tnDONyTaDjstDUvBY90WJ4u9IlqFaBFCWlOFMIHU2cIGOqUB27XQ66FZYn09qn4JKWGdDFgHBLgy3m7L2FcQo9XoAlIalFwQRPjGICsvxD48JlEKJa3%2BbbQjBbwUk7KmShHgMdYoCo5QBxVeYHxBfG0Cv27IH56%2FUqHVtRmAISi7Eiz832nvC6tSTvMkke7NWmUDvXsr88D%2BeVV2l56S7URQRGQ1SOfSnTFLa092MqentkOsQXSc8h%2FSH2OQvc1V%2FJNU7TtFrWvu&X-Amz-Signature=834cdf2f59e5d2e0db704816636810f72e8c60af4eeb46f62b2e8cce8aac3e28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
