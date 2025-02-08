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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEPC6CZM%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T070058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIFtlADpqcsptHLy71TauRkSk20slKT5hYYDM%2BGTct3DjAiBPmGaBayovnqjUN6%2FoUqkTYSRJ8LhQqtq87pY%2FTu%2BTKSqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpHVASTa3IfTPI2WkKtwDlgWRJ8vpaaKr0RuQdcsimaf0LcyZqcdPmghfR5EbswVYSZ2NPU0XAW7ZzPWJeVWDU0RwTPyrt16nhdkxda6s6YKfjwo3iH3H40AZEjWmFC%2BkiZ%2FSn%2FpeL%2B8jEy%2BCsStiYvSE6Q692eR9ZoltF99m2fj6NC6OnCD2n0Ani0K88J1UgDssZlZvwcqzYD5CwxEecF9CjRvQWFOqllybhR1BWiUdWHs%2FVK7FA6e5bX9MRs0VzaZ9bylU1lrSp9GxApXi1iK1CbKpi1Jx4ZcwRzWuHsYR0I6RJ7Ukg2PAmOJnPYnfTwQynP2F3tzipY0msNJjNtcAnTplyPgDoiqyn8ofVDzXxwsXZ0RrhnAdFuqbozkQnhoutU%2FzRtDUofGjxOXeGVqtEXTd1EHIAc5gBDJHRgWRfHJxgyJSWO3sM9XPbjvYRleG9TetJOZaztLGiQaQKjCWQt%2F5qGDnn%2BGglol4RtzWdsK5Axq8RyPpk6lQ7GZ%2B%2FDLRPTdTZJYP3%2Flz%2Bwy5dJYbpi4CdIKCj%2Bw7Q1u1dfWndLjD6rbjBAvWkblR%2BtBq0z8KWVlHdreJK7qiZ44%2Fy0AkNLJAYF4Al6FyZsohedmXRxu6bidhNHvDfCUrcmjxWKKhJTJsiB8lncYwjfCbvQY6pgF%2FYcUPtLgWyWaqdWlm78rvKfYUHvWsx081uRn7wkyEgqcKr%2BnhwHGb7equrnsI4f%2Bczzxkn%2Fsqu14Q5FBW63uuj010%2BapynWwnLCY8WmQg6X7WsfEzgcirDh4l5A8zRbl%2FVPSxex0GpkdHkPj8MzPdaucmonvUWr3Kg%2Fpn%2Bb4yMEaVJ4diou%2FkSFz8qZ6T%2B0yazpJ8R8uR0CZ1o4OdatadOSW5gVs1&X-Amz-Signature=88b4bc94fd8c8593c2c339ca7ee340babad13fb32478e03eeefbee22d0651b46&X-Amz-SignedHeaders=host&x-id=GetObject)

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
