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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X5JQ6HM%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T220141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCCED14fC2JnuvVu2P%2Fg6X5glTCI4Cyfs346loHFr4iuQIhALixVTPZb5JiFZHKBcq1oFf3QH8jbooB%2B66dbKhRIRwkKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVZhsecbOcMGzjx6kq3APbRdW9F4HBrR1n33k9%2FOsGbAWFRgoIO2RCPr5mMlXvK%2Buby1WB8KEYN70mph34SpMh1VRRMdxL2HYKHJrT8D4qpLQxUIdEo3eBIEaEtjT8aShCZFHojUgnKjypuX%2B6Xe9deChJrS9U1lhDRdFM0BSV4Z9gJtaBU7k5X%2FLuf11%2BzG3j3MjiTEGIvsCZVf9kzXezdM9ZMBM2Dmf%2FoNs8jZfD%2BBddklRe1v3N1TjZuw9Ucz9EyNPaptsPjZGKLs2yk84VAYvCkIaOKTO6s6wjQMCuThJ85VH%2BwlSwRQkyELnt%2BVO%2FrZlKZkJmEiWpbawXRIbEPlyqOxmwBE5SKonCeorOeaxafidgSq31Tai3iVBEMRVXUZn83PgCP1neDdC1Vb3hy%2FhXOg2R4NNTE02J98kOTAm6MuoEtHKshC9%2FQpghyFZgqg5fklgXe7K8hFuGFmjuTfVQ5jUiZDz85fJyV%2FOXEVlD6RK5Mb7RCXM4ptYaZK6NGxbNL%2BsTKt9rgxM8V8FHI2ETIKvTnFTrVYoFmuBwdbcGclFeOzPB1UISEv0Vvw39dnWUIZ0uWzPraVoQxEsuBMY9cQFNdRGf0vgFt8EMetOy1GY1QY1g44VulPiwG8ScL%2BF4qlA4CGaSQDC2mJ%2B9BjqkAW4bB3l8PdbYT28tngg9hEmJI18K9LL%2BrC3Mpc9peGTFWvTtXE4N6pWmBMs6SgVlfr%2BwvzL4gBoSyLRaB%2F%2FsUMs1IA6C8mNVO8Z%2BQYanbLZtaI9dpZb6yB8XgHXs1je6VQM8cIYDC6bqHF2iaIa4%2BR%2BWh15YngesK%2BksK9ZftxCeKjOmf68TNQQikEm%2F8xwnHz5rghQUhE75PQUqxLh1R2Ge0UrF&X-Amz-Signature=bfad688401f9e810be14745f0103addd049cd79f43d988401cfca12eca741c51&X-Amz-SignedHeaders=host&x-id=GetObject)

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
