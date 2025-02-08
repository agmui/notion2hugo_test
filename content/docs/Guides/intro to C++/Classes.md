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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDJPC3QR%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T080857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDQs5gCZLwLGuul0t4CvgMxoVKktJ%2BOT2u7HnpmSRwQRQIgQXWDz2uUnFXQcGAzYxotbVPC2WViGvwKjjB8AjsCDWQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFap1yPUwMTi826kKSrcA%2BpevfbXDxxdEjUf4TJDdd3LQv3bMMzAnG4WeYCM08hq2RY2sI8R2CFBsBqDEEXSe7Gu%2BWUUOJIK9Xc3lSoKB5Gi8nxt6fSTlvPhv6JCsh6zMgNSdQH37NF%2FfoZuCfgcK%2FWEwV0ec%2BYk56aHxmEogpgTSx4d9v4dsvXARXrGCCKMP20qn9bYGAIy%2FJ5jchwJMKPEAvDZQ3uGXApyiNtnGnmerg6F8%2BnHoEZw7KMjTl%2B5yeo65DjWSRAmVvk8yhMCuebksCYuHQBIf5Pt%2B0qe1EWBNu3XXgd0xz7DBX9aS7buwTBlI2xs8GVM8PYXwFhkG5p91DTjBFIAXAIASS%2BTDjxTf1%2BmtO89qUKMQ8pkIyW9hEGyescrsihzNVVwPridSJjjQAWc1t1r%2FJJeOyr0xTna5YtUVISYSbWwooYo6mmA%2F%2F982wtJGJBOXHGCTfYKkjcyIvcMpiXQT7znB%2F%2BP%2F0LA3RFEj9My0bjciAfmWPMAWLwmUj1XSnGfBI2s3WxoYaJtwb8r88%2FLcwBR9AZItGOWW7I3MgBesl2Nb3KSOaXVCT1jH12ZUF%2Bf0an4iP8lvfxqFG1C2LZV%2F4zBUvwAocRNNhLjulY%2BHLubl70uy8CXbH9BYi0nbf4%2FqUE2MN6QnL0GOqUBUb4Sd1kBo0CCMISR9wLJcKzXjD90patWsk9odTSjbSd6F4mNbMrqUTJRFiWY967t4CM9Zy4%2FTdC%2FGmbQEMyk8UGDA7P0GWGcweTP24ROAPDYXMcKtbEJwsKcGNqxrKRUfkJ81pNC%2FJlnaxGTu1ZaCNVVc2bwGwPROmUUafJKcof1877lZhpROEMR%2B7FLylEOF1CdDoCV1MxjAcqrGUL9hiQAFkwL&X-Amz-Signature=be047fa9c8449c7f394dc1160d10b7975ef9a963e14c2b0b3c859e13e4fa4d76&X-Amz-SignedHeaders=host&x-id=GetObject)

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
