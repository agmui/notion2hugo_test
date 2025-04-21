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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWI6SW5T%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T033331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQDSY7nKcbNSTvRk7UMKyNgbitN9oSeUxgEgBmU5lnKkxQIhAN2YpcSXnQT7zFinETJ%2Fg6ebyRHOLK5i5KIo8gONGaQvKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzX5YLdiD7srN1EWY4q3APKo8PN2DFUM1WUpDDPBY8%2BdJhBoEUtnLIrplmjFubyb2Sjekxx4J0ExJSLM5p8ag2aUxE6m6EBWO6I63PMWCaas8STNYpbKo3hqrHgn01WVBDYjEVyeJ0z7hk7gM5axAAqVHf3L8HprawzvjeGgb2NHNCCPeoA04K4YeoPBvbSKytwbW4H4vgPVKqyHRVMX0%2F8LWxiaTi%2FYpDocjw7oL1Yi6zSoCBsTY06xKcteHXqlM3xllZnAjEuhB2DsHJkeSDsxdbn%2FecDw679bHzwVOqervgez%2B7Tms4q%2FGk4QQZ3w3IcEExsT%2BZ%2BUAYSNRakZV2LyMmaZG67kVqNr2yHeey2rk5RvOsBBGekZxptvomvwIWWbRbIupMc7fBZC9o4FeKvkFnb1ywWSVpOeilg8azVoyC2vhVo%2BdoUPCSSLbjd9OJA6aV0khMB3V9vgL%2F2aKpl8yeYwu3pxNgWQuTU%2F1pwYuPrFG2yLqPOlehgX%2F40UynO0rhGDd7NmOAKU4wbsQ%2F03LgMNvfHthgYDAp92ZRz1M%2Bxe5LDBkRrB6O8goSH4n7J1m4FrAP39Vcw8Lc6zX1ju4GWshbXFfunr01H8JRYozy8ptarvVJy6FOw1UwXZNeuwHMVT54pfjwxMDDa25XABjqkAabSrVwSrwmZG02f%2B5Huj0vEhcTEqwe%2F0ReMqqUINAzAuv5ng%2BUvbSYwavQFh%2BuD5YIwddaDNMGUCzqyrriGAPAfZbxj%2BLiJkftDQe%2BzrP2t1pm6wib1%2F%2FeLc0TadRtgav8QAHHk%2FbuKbQJxoaR%2Bhl5FTAbLd8viznaQy0Bs9fO59DZw9HcZtVuvGoU1WOmIQ%2F6sQAXtuJPqtTzJRPuTS3PgKWVm&X-Amz-Signature=f4f242cf9a6578cdc41b5abf2350ff56e965393a96662527846c3b7fd2c8edbb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
