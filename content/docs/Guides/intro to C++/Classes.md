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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KUHXVM2%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T100903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9e%2BYzb%2BldMg5AGa2b%2Fkon5Tw2YjXS9wplekYNhqflbAIhALKWVVWL1S%2FgKzwJDcjiiWxwFViSms4Mj%2BLFmcWWu2ltKv8DCBMQABoMNjM3NDIzMTgzODA1IgybnNJ4O9RZiqM6KI0q3AOszVpleIeH8qT55XOVOblSxxhw2xRPyAyGT8Cs4GXVHj3NoYzbyIcBu0keO8CwJmTHDTkQqgGp5GpOFdTMleP4xGguZL%2BZtHki159KgX3YyeYFFJXSw%2FIHt5hbGAU68Trk6t56yf55bMCQnALLApbec3fQFk3EKAbMKjIJCQUcQeYFPxOqrO6ZqSLFSakp%2F%2Bb%2Ft6tuBwbfwuycfqWrBgWMqjQddqHIHPL2do1%2FnWTOe%2BLSylv1IAzd%2FUnvg2NXUL%2FupbFK8QzxNs1VJjLKcOfopWB9Ompdr3L%2B82bxdlNOWHaxlHO%2FfsY6PLQud64f54DqL7AZs5IuJEqpu0duolK4cpkT%2FivJ9hSeaTBAZWCZwomFb7H0HmcAXDRvG5enu2OqfPMO%2Fk75q%2Bqi4ZyD8ZxbQfOsAjBHbxOdvPDnsg1KCqmrvQJveYn%2FjeqXz8YiYo%2Fao30o8IE5eeFib8xzR2x678olPIoHlhfIqK8S5%2B9d5%2FNPEd8p8l8EJWBxggk1bsfrqF0JJkEw%2Fq2r413yw3bRMyzzkB2xAasF2s4OOcqtPOrCCvTHkAbyr7wL%2F1xW5abUxfFg7Rzdgkm9MgDFRvX99qBIpmDLuptI3rAZ0WSS%2BDQJ7UiY2B14OpK9bTC%2F7Ym%2FBjqkAcVFuN4%2B83xSxQ5yxvb7zI43l5D1s3STMce%2BTcBf%2FyqYP8peLaPQu1QWvJi66jM1TpIPlrarqrYE6btVu2blf%2BffDZqZohfyNPSc2C17%2BRVMHkZtxIDWvbLZgejcf%2B48ArvuTeoJNXtG2R6WFry%2FyJpmunh5YwXyR%2BYEQE50kLqAWEc1NDp5yw4NwiJKaLBA4c8nHX4sIESAzHfEsqRj9sDbVjg6&X-Amz-Signature=54f427d60e9b2eb75670914ec6cfa30a2bb412c33f78b600aa198592981947b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
