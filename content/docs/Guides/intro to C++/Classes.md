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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466642YCYJ4%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7TEDTSSC4GLRJ6Y%2BUIYGA7FxafgyXoXicLS4Lj4GsGAIhAP5BA1n6mrE2SX4dc6YAskExDewpjTpxGUAN1KCJgOCrKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGwiYsTfZB%2B5jTgbEq3APSjxMd4kPzYLt7m7JzHA9C64n1smPssgJ8fgrZQGrnhypg9k8I40Q2kLDOXkaGg6vkUYnXlByFp3rtHHZJrXFSfaSJng1YpD4wKvG12w40x2EK16%2Bx1GMdZ9xNOWUBb4xsV7A3en5wKHGy8AmdhWDwl%2Fecl11bu3ehZK7qmMLu67AW9sBK4xYm6ECKN2swU1NaQt6K5x6k0LUESk%2FZrj4Gnzl8y73NnN5kp2Gu%2FKewYVAt%2BROeSkld%2Fqou%2Fv7Yx6xMQEArR0ModMUr0%2FmAFWvlBufqQ1zecZQSbmcs8hXDraTSkCQYCNZH3QodV6PbAi%2BPZjfICGs1HbYOPT8pksRpJyIsII8aaQnXdmnRyiUypm%2FXnw7aPYfuggnxED7teh20HrqeDRhDXBdyboj29IBEPe8dZlNEudl0vmMKMmsIWd8V0fm6luvyJkeL%2BUgklsL9SzqHBhMLkZt%2F3NbmhfZt7Ism4vCFRBOqCbaSIhmJCZy1I2E34otOq5JNdfASzV5nnGY9xh%2BEDDlKTapAKRBHWDOz3j%2FVb6P7zpXbc%2BVEDU2x5dn4oCvJgx7Q0Hbaj5Rg1sK4eTbxUE6KIyTGKBslSOJsU%2F31FiESdlGenmxRhAjXLGTBP2KIkEJi4zDh6N7MBjqkAUJ%2BPiPDJjeVzhT96ZTj19KV0K4qRzioYoBKqpP0WuINuJehcp%2BSXMnKL4fhfqPy8j2T%2Fy67%2Fc2Wr9pPYRyCLFGmmrhoNiO2c8TtAZXvR01Mtm1gjm0xu65F85r%2Fsub0YdlBBVavQRZzy%2BTPOo8VUgruKE9YxycfmU0KRpolhhz%2FLnYZeiRXmfaS8kLNhrPIoMR6RRpcYXoUmidj70Fpzg9MB7QZ&X-Amz-Signature=b8979c6cfdbd16bf696c6cca15efd1979eb5d65bc57db15439faed711a3d099e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
