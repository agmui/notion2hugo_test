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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVNKB2YX%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T081004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkZE9T3YU%2FO2xEBDiHoCaUPTX8HaC56sRrm6kIfHXyjAiAQxnCpoQKKJ2hV8G6nE4RdI5iSNtk70PtEiqlABmR5Tyr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMVc3kBmSUJXt2S%2BHDKtwDta%2BhdrH13GZtCev6dQ87uBPNbnlCyjGG16zb4rGo4k7%2BDFnKvQ19hdHocYpUlvHhZ3yf7YCzR%2Bn5v1PwYzT8bPmjhWiO%2B4w9olXt6HNieTO1mid%2FFKA%2FsKmHqUfbuR%2Ba2FBUbOKP1sgcym5F4ZNcq7aOVOkXO1oNbly2UxGVMdLtZp9ZLNyPMOexp36esFAx2aD5%2FwkVfNs8vsPQwjUluAnA11pg8pApYteB7L%2FylzqiboM0G9B9EUt4NkbR0cyKaCYwN977f49M5wXtuMiyB2DHfVH1olT6GW8f9Mj8qIJ2Flegj%2BOLzenztHQwKC78VPCPhOGnRn3Shu0ikZxRqEPtyIQYw6F2F7udQ%2FezLx5teBkD1qfk5ySuTExyvXycc8QEi5eMtp%2FH%2FiS015hsFaEdLeKlaWj%2Fv24XzKvHnzSe9txHxnJdZeODKR4ECSxMOl31HOYqEIdSUSXLSPojqSYeycyO1yHHD7PwrlhlDrPLtuyFoJpIYhSG0Am8BjVjgwUicTk8LZqV2c8wXKXUx7JQT80A0G%2Bfvc%2BYgob4%2FnWXE4O4kP8HitUfFQoDxmzGCGRnNXcrOODfnOeOTOxVcatQoMdEE%2BRTKjdRGE%2BhAqoCeOZG7EDPVGiW%2BUQwkO22wAY6pgHq4S8AmGIOdx7AGVtipXjw63nqeYLoORdqQ0t7J144JMc%2BVDYxHaImfLffcjkH2M9GcURRx76tQ6CCsNL1knga3Mc9HVzAC1MnxvWhR1iG3nOsZMJQxXW4gA8abSM22OmM5mWUZNcXqN7jFjvbKRbCD65Nhkn8Iv60cFGB5WCkHporUXVsPUfnpbXlqPK%2BsR6HBWqhTmTbgoOgGD0XfUMf4bE68YgQ&X-Amz-Signature=02be0f8777cde23d769eacb21ff728f113019d84ef49c62ac987bd95268d50b9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
