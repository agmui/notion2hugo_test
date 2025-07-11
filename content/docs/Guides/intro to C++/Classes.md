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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623CBG6X7%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T170940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5rdkazKCHujunwvPKEO18ZWjoq%2BNf9VZ%2B0x1KBK6mxgIhAKx7MW%2BJl5s30eYzqFg24l0YUasPmwpCraeRkQ1BB9XOKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgythDR%2BXPjVTGSuPrYq3AOltADr28Ra9QL0E0DIQrNnaPzFojuuZu6ql2rEy8A%2FU4HllGk%2Fl4g2gPJ5yQCe3uyBjZiml4FtaBVQYO32chaKW9%2Fe%2B081bLgdZd9o%2FWmN30FmPhVgBvbz53uU6yu%2FkQxQEkPjjZdrMf0Ber7X2x855Dvs0BwKvOv4223fwBJxpM%2F0D3OYlo5UAoAX90kd3lGEHH6CmRRySLxVfrmb8kq733kp8SZs9koIr3aEAHno%2BBS6EVfXiOzWc0ShhNhF%2FI3uHHDKC%2BIWCG%2Ft8gm1NRrXviVwWqD9MMDjtzQjW7WjEkfv4fMdYeSgu5C%2F0pj1D4o6ZRH7qiOLI8ap22DDVk85qC9QmUrKDZMOAzRuNstmUVasPeLlX0Iw9GI0YPInRnIwQsIk4b4YCW%2BI9RfqFtOlyEGw%2Buu8BQjo28jee%2F3f72BnJAuUMPhF3oMjoNBr8NkeumMYlk2zdGqSCikyN5PqaBVQhKL9loTlaPHaXJkLLTuKj624chiEWyKfttISzSFkPWgOkidrwojIp%2BkJWzs%2FhNnZ%2FBDyaXO7YWxGQsY6cHb8sBZ9LW3K%2FhKt9yPBlSUNOiYrYO7Wo8TeQbORaLKtoHC76baEq2iSjoaAzW5O9JbHpNI7uJ%2FGcFqEbzDM%2FsTDBjqkAdCIFHcslOKlDeNfScnYhwroUo0kYh6uAaqIIlj1%2FO%2FhUxwv9vjNm54Ti2hlzkO8HgWRcViZNucokI7eWAkPQh8z%2FQMC2HCveXT6EuS7wLwoLoJngAbprQRpJK70Su%2Fea5HehqurJBKDHMMZbXW6aOfEWl2u7y6XEEH%2BnORY5QNMs04PoxZvd75S2ob5b4Vw67oXsew9zPysqlKnwm3JJQwu6vJL&X-Amz-Signature=09526d8624255427e0f4755860b46fb1ebb349fcc7dc22b7917f09f721ed11dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
