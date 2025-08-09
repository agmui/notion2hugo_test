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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWNEMYEA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCSqJ0Bkq0IxqIxMNSY1etoFWZiE4E1FCFZRaVdVVKcmgIhAKsC90WitUsdKet6GleI%2B%2BRQsKE9jQw2pMWHCi7cLRXEKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRoShKJagruIYiWDMq3ANJp0cYiAtL8qAQ4QilmoN51p9i5R7WESrpHzrFWuW2JzZmtqpex8drWi8BbgH30DSQqWOmbwgYOKR7maVeJ8iUAJCH8aoIPCYDye8MsVXDoLj5T6X4SvjVET4k1QtymNpbow5u8WJ3Zmo9BdNgSogah%2FQNw8i4sUuxMfa76vNtfnuq7J5PMsAF%2FYXzeg9OI2F%2BtXdnBXDfaDdcyhm6z1YZjTqmUsavtuJEpJntC6Crza17UpCwPSzgaSVplWhDI9%2BhY1dbX%2FuddhGrIl9JmtGlqL28J%2BGyJijtECLQDxc5A1o96lSXNgrdxpbyC7e5jpf1JlIndVUnx32W0%2FxsfCspGpzv2ln8K7TykFHRQcJWxJ0N8rV3rEEce%2BJHOTd0FhSm4KxabkGKo7EULv%2FB8SxWQm%2F2nOmw%2FWTCVd5ruITbRGQeHvhzX117cV1hoy9N9JI4klW8OX5f6yplBZVClzydluw2AFNqmtW7DlrvCGjn%2BjsNtNVAZ%2FP32YgmvRyhRQuYsoGbAapqZKQH4zUf8Etk7U5TvbYvCtcZPgFAGZJSEdEeO1FeFAdr42WlFeahUEHuFWatd2G%2BtWa6xxl7hXLJvy4P3KiOv%2FFSFySh%2FHNwZrgCNbzgbbRtcR23rzDw9drEBjqkAXaPpgFDFkTW5vHyKtdr6XqwDjMK1%2BzRC59xM7LbEHKWOCL%2F0VvjkpwCy3rA5HKUaY1NHASz9CKuPL09iqoL8U7Bj5%2B2pbc8l8yDxHJOCqAc%2BDrOkBppE1nl30ewCuN5AmDnoArjTrfYKfYRgE8B6sCkBNEsDFBexvK%2B9Ko1ftDF%2FDqpAEGn78Sjoq4xafQ0xPDqaKTlU%2B3TWYwGrINrGh55O4NC&X-Amz-Signature=0bb44ac4ff10d87831fdf662846a40a4b6f7f69f683e4f8acf55ad8fac3cc439&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
