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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XKZ5A6Q%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T080734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDRo2aXPBj3AZlpsqPWzGVpwBnZ6qRQ%2BeFGnnKWnHPr0AIhAIchwo%2B6h05tQvkpScpev3t1ekFiWn5tQ%2FdaYZBRYkCSKv8DCFkQABoMNjM3NDIzMTgzODA1IgzOdsXyhiWpkLADa7Uq3APY7xDBuBt%2BkJ%2FWZxepzWPxgDVGkOEwvTQd2htmJeeAPhQJ4%2BW7sgk%2FqLDS9%2Bc7sb6qD1K%2FBrq5rHOwPFGPkz%2FFmQ4XSRUnRapnIerp9ZhE1KkooGCqaxTmihv4JWaYjHqyrTwIwZV0%2FNyYx5u32o%2FBIY3oulAqT2qHUzivid9Z871JfJF38ujnNCOIeZmgoscLHujBd5SvS8m5%2F70WW2zIr1m9LD2h7Os8GncxSWKDp6moxRy9NYBod9pbvXoI9V3Hw%2FQZaIbbZwNs0br2PG2HSV2swEF85H0BA%2F%2BbXG%2FSyEqr%2BJlqD3V1m7CDPmq0CZz2kV4P%2BI5HLxfKffacmz%2ByCAA2rmXFfuGU%2BCbCSAmHe7vH1I5kg8e6KHs%2FyRPH9rZuIBDiOLToN4PGe67YeBCpE3rLQT9HW2Ui2smkJfX7FH9xpHnlOpCDUNQKeh7vyO5%2FhrjsjmLBXnDBeeCZE56bGgOceVh%2Fjmg3Kw8%2BWh1t5YwsAgdu8Z55tSEaLeDgpTN6fVhLEooXuDAFoav%2BZitq5n98UBU7SPFmFLGQHVY%2BtH%2BDnmh8edeT%2FxkV%2FgeUWD9NbCDDbL7N%2F2qebdNGrgaIICc6goRNWgSF7yyifaGG4OF94DEP%2FXj0SWHBjTDE4K%2B%2BBjqkAfpTnDQtyuKwgTSuy62iezFm5txIXhKIncuWEMAsIjqb8xi6gp1O3wGFGkFrq3rHEtDsmYQZjM3q51WVlaNtPZIwHpQ0ks9eR%2F46DvZGyAvST8rjKtttYUl%2Br0bJ4W87a0GknK314mCiQUi%2B7jbjfz5ju%2F7pIWaDMX5JK%2BGEhnBu9nO8unwzRMw8vQLl1Xx4ZSbRLCMOh6YjHWSvsMc%2BU7j%2F0L%2Bt&X-Amz-Signature=b3954b7345ee7f31dc5e85a33db32bb292bc48f7fc5a5dcc25d910696e607ce0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
