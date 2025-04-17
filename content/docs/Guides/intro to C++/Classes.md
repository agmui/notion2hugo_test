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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSCGFS7S%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T140824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPVVgg2R8%2FYFMbxq9veInExfcU6l3d9ouVuElC0AY1xQIhALTJnqpuj6OeHs0C0rXueLylff%2FS6ObYAL%2FCRnMDf7KMKv8DCF4QABoMNjM3NDIzMTgzODA1IgxJMlu0c9MKsaBxYfMq3AP3e4Ltd1jVJFTuruDgInXJt41MEQn5Hb7wt0MW%2BQZFgpjZpD2nNQEoMv3ICRZEmMwlfnTs%2FYivV4CGOwfLBBsTv99fQjZ%2Brxb8pdzY95MP5HXJrgr9mfvhgtbvXCMU2I4AQDFNkIhXpB72FnkQzcsIy3KSSjalvTvjTm1%2B%2Bw20iEblrYATYN%2F3HGWbTboc%2Fcv2hhGFTMYgGXRGUw0UsWkDDgsoPGu1WaAQ%2BqGj2FIfvA9%2FZCvIuwdwq4G80kIy5FjpStjGOzI5bGbMDprwv%2BN77nXo7wnoHRg6hIM255LTE1hu0RxkF4eQ6w9qrYSkhDSIkqhTnVuwu6fc3WIguH3BN2aCnX3POVxEsQT3TeU54bGNq7c%2B08ldfKZKFdnMo8GxpIoRj2OpB3jpAjOPb7vHo6Vvu0GjHHIllB88vzMgZasCtdAFRbkTAMI14Z9XDN54Tpp02BW59BaOupBLriF%2BYM5v%2BNygErYOa3l8WSn8%2BTe%2BAXpQlQwtaDec9GfLvpmbMuQTmG3DcO72uvH7tjYSBqBKlLrR%2FQrSVuFugrqoz5OV0QLr9ZkBeQb2Zeyx2NBWeEEMSmgWBWfI8ldILPE2TzKo5WjHTnoqaBBHbqiOHOthyY5wf1tvu%2F71UzDR%2B4PABjqkARawIdempXgXpWkNuMIPopgOAmrBLmlT3L29%2BpnAgJuPp8l98z3csvAhEzJzhrS50ZpKcV21opgCe2bgI%2FE6nQjqEYAOy0muArQfnWupIrbhV%2BU%2FYsEdyIA%2F8OfD2PnBkXcDT7t8oqgcQ%2BuieJDjYipuLk5TtGV2tF1OzSYosyh9ZLYjKz4Ju%2F3IZz20O5R%2BD4APOC2XOxe1IUu2XN%2BJh72i%2F65w&X-Amz-Signature=58020f5ea5879035fbcf6bb6590d7e10c30239542fab98b1ea39782946a604f6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
