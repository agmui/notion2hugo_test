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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRZCU2OW%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T200818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BJBiC2lnlaJZqoMkmVxCCod0NrtPMSglaG06tNxH4dwIhALuGe53ko9a%2BnGmbltwQCPjdmL9yKCPZf6gpJ%2FLFAQFPKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWNfU9k0W4GJW7KV4q3APmNvI6qXdUrE5D32SaYJjW9K8LTS7IF9%2FLrohhE427XhfrUHEjECipY2oUZoMrGUNc%2F1E36AD%2BPCMxdO1AJIk9n7AW%2B5qXzOK4tw6SpF3Ert3UNdGJX9ODD08TBZohsE299fYoFqmYw%2BW%2BsxKI9LRAKxyFz%2BfWeOaylLegBfkTJAjL%2FfNTGY5F340dtZJm8UZNzNxbtFjQfZhwT9xI8rJapTIt8rNKkTH2pn6zM%2FWkpsg1SmSdE4NcFD9BztNOYRTiCXlgK2V4MhqbpuPygiHvodECN3FpNV%2BhkUHX8X1VOz4%2Fj8KpEBNFMH27w%2B%2BopSyrpX9FGt5gXg6uqm2sOjIgXGuNDztLo54sz%2BOAW90YC5dQd%2B5aKAIoZG1dZRKii5R5tHpYkE3QliwBONpzS7FsiPVHmrXqIAuQViQFk%2BOtSEreDAxnTIcWiSR9SAlv7zorPaLbGkGZ370L%2FU8vadUQyZZuukBq9jKZcK%2BRwAWISVdLmBxUSrDXJpoD7IvdN2XNtLXkFPgQPzWaliAyXVBAd0hPtIzfV%2BWzjtJXbXEkxbfAtAcKknlNlciLCEs%2Fyj8L9Uev1c2zn2T6fFE6WlbRmE%2BUjJrQX58qJmjIfDu3KTO5ilLbhFpfa0T0pzCH9%2Bm8BjqkATKTKQdGoBkDTeb%2F%2B1ZVKAFRwspogbKk5bFTlF%2F4PDccLpM6QueYcQ0tlnSCDcQahlhspkx9gINPExa%2FRY69Xr2yNQEQJnjMi6m79wi61w3mu4dyfE4zmQwLf0SWJrSWswKBBwo5RuYQjIyW3h7tHSvGnivMjYvljWHtnS9cwMuwPjwi6ZIzJP0awS7ZkANPXL%2FQOmXuko40bcx3EkkvfG9rnSHI&X-Amz-Signature=2c2a0b16687d4cbdf9f0f34281307593294bb2750b432c81cab98ae40224e468&X-Amz-SignedHeaders=host&x-id=GetObject)

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
