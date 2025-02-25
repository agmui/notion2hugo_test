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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWQTEVPT%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T190250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCylXv3L9ZEApVSywDJFHihyIWW48vhd8ZW4gnPgVjmjAIhAKL3yDVzj1wpcq1cEqdOxgVAN4HDHac4PkY5mvPN2eKiKv8DCEsQABoMNjM3NDIzMTgzODA1IgzviSqlPIqZYuqVWEgq3AO2IZsKpPgsZV3M7uKrFy276h3DEDViI2jYvy6YvgnNamsnYFSZgXjYpulkDmzOyQO7DXMt3ayOssix4A6DJ86zVcCEzSN5MXCEq5%2Fx5YXzgu%2FDgUc31JfLrlAJX3ET6Sb1EHYIAS7BjR9xQZsHCWcPB3NrcdSz8G%2BdA2VdRRGi9BjL%2FNroxXrZoQE0C3mJcaOBzXo9612SZJW5i6fwF3Cj3lr0BGbD0aUwBl5ebdD8j%2FBbkjYy4x1VQLLIFTNEWpKmOjcbR%2FstovPSgoO1PO0idn4uvRLsFpJ85peismPBxy6cxmq4VB0FzZTv7lnA1GFE7FFKImpEt3TFFgR8Lqyr0W2gYoJKvR59GtwaGxg1Ff8buCDpGNMSzJQZMlJ%2B9eLA2JR70lNAgiyb1VSYhHVxiG3Rrff6WKPsxvbBVTcaQzI%2B%2BinwVSICu935wugvOKDVTEsb7JKRhxVTGz6OS%2Bh6hcM8QR1EfMaPJBJUkCVyr9A%2BP0PEnp6xQMb%2FkOzroarKmfa5MtR0BkHx6ZfqQncJesanbhARypy4JS5DR5CuMtFagyx2fkLL2FbAO1IgT3RBrdpIa2P631WKdgrb5B89I2axfxBSuk4fT9DxKyl5jYyCW8YyPDnu9AZ%2BHzCwjfi9BjqkATJfGQ%2BQiMfhPY1%2BElHY1Iz%2BDJXQfAccRwdfR%2BOi9stwAKIx8xB5ZRhM1D7eubTKDOxIoetJFlkQFX%2FnQDtTAfrTDBsgOKarjvhP0k317uFVzL60dtMAE2AYDUJfMm9HSgtwQbr%2Fq5RpxTOZ0G2hscyJc3PAy67EnZdqYZGtVl0KQlmpUJZ802x7IoL7x77q6edkhA3H5oX9UKyJ8ZzkRB%2BGnur%2B&X-Amz-Signature=2e8eeedef7a4baecb3f38dca341f1ccafa51d6e85d46771803f37c10c76a578c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
