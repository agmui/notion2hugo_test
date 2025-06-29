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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZCCCUHY%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T150738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCseGYtzhdwU3N1%2FIwjI4gtLR5filPQgvxqRAErocVytwIhALy4x3RMp6gfvHr5zVvbizL8wChjyCkW0IgeUvNnf9CJKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzh%2BG7VqzsB2D8rlEkq3AOJrk3srJ5C%2B6wImOWsVPtZZSxiniAYgzOa%2BxSwwt1ntGoanTd46tgQ14C6CivAmboWI9R0TWQxQLXKp%2FOsGHoUYoc2ku8CmHLBlLTtr%2Bkr0t0EN3GEOfrbIGvoOY8de%2Fti5SdbvyGw8tyXjcXw%2FpEZh4DS6VNwbfI%2FXSVPHzpbiOeVtZVv0NOoq2Geax%2FvEY3v0JTqA%2FjCz6%2BeVbzNtOXnZ2qbc%2BUG71PI2BponvDAyIc9J7TXtTa9DjjESYjSXqWRfW8kTf8XvM3PMJ3N5MH%2B39EaXAmWscqyFJqtqvoGKvyePFbvp8tvEKCV%2BeLj5ooAdlQZLUza86c%2FXztRUytKr3VyyYnBCm8LE4ujOEzRKAkCTus0CR8YyenfEy%2Bbj65vuGJJppQwyRhxQF5WBz%2FOGRGhZwmxdj7v0FL6fXtWs4Tcd%2F4CaG8sjznQ%2Bg1HYHWvxCq4JNB5H0FeMmZ3y5BDIKTJRmF%2Blo9FOAbd%2FQqHmmdSp8PSjxd0ISjgyKpO9Lryi4jawlUDSNYRZJQpfaJjy1DfidF2aqby8wP3jjPr6p44w%2F9Ha3ro6DkrZHu3dvFradAsTj8FYV0Sz6VlPCL%2BvYlcx2%2F34qUHTM1ubI4Le8gUEYUQeo0MZ7MwHTDyuoTDBjqkAR2z37wFsk7y5C1GPN4tRrNuS%2BfyzZipYt7yUvTUqo9lvDiJstcvrwL7QT0f1%2FHQu2ICcZEsqIHWC%2Bxti9Y%2Bw0WABwwQJRTTU8gOmyAWn1BfZf1niLtZTs69NYLRSg1UB6E0AQoj9c4c9uFoXCuLFCw1%2Flx9RbLyS3nn%2Bnv9KVlIHFzHtU7h1rM7UvklCn%2FjI2fYvIZ5XcgGE0j6F4alhWqVCHjA&X-Amz-Signature=fcffa4bb3573d13de9b0b31de6302638e6ad8d0d2a8959ca614e23d4100d8bb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
