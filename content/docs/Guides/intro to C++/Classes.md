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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2HNA5MU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDK%2B%2BTuzERQjuOx68Ue8k7B7Y7YhL4L2ARiGk%2BLu0FdeAiEA2k0RmvZJVGT5WImCUo0No%2FkqoZMV1lGzYA7F1e%2BYTRcq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDDXyTJZYXdYsT3SoMyrcA46A3HTUe8yH8vcwGi4gfjxWCbiA53CffJ9e2Z5GxpfONm5NNag0t5lf5jDltyBdCHW6VtXyWuZpYPWeKOEsfuk%2FjvH6kVfYCvG98ZuFKxv%2Fhtixd8izOn0tr23OVUfQtxxkLjUNaBe%2BpI8jeLrG74gaRxoSgLSXNHr3wiDeHFPw%2FuH4tTwy5hc%2FKZqMtzpImhWX6wPmV7mze9zPhau6RSaj8uEmQs9DpqNnoV2vUw1Bq21nG86nI8JBJ17JDEofQ4f8PQfKBXnsuzgmgVr85NdpfoQho8RUu1D%2FBt%2FZ%2Boev3zTCZu1ormdRRsNRHlGFgQjqK7hhsbvEtwe%2F3N2S4llfaVcsRh8ql%2B5cFfIM%2FGAX1z6%2Brgg2fQWTEJwRbFA83LKi1Evpm9dqjrQ2UceiNjv4F3m7Y37NGWVcySXgWwYjA9WqIa3UIxk%2F4sRTBd65UA5GUjTMSul79eZiZmJ9JJBCRDLvjUlaECErTJgVpep6EXYqpk%2Fz7BrL2AbXjiKOhb%2FR8urHcoOc9fRDVw5T9YmtCzZSXyymJmmaXc5rV1oSajMLBaHg8iVKfafPxjj9zK2gODFHGSm6%2B%2Bj8GgzENZCTftpxJdGX7o7bUVamtVTrKyCdfVkLQVkgg%2B3KMJOH8MQGOqUBuOitLvx2d4IQryP6aB0kl7K9HdO%2F2xAA5pEkb5Oz%2FHpHc5wtorWexmZB4WajJ0d63AWBDIo1NEk93yHUw25qYW%2BGFSanYvUITdrDt3aOUDTx9SpZWajotEPYH1WOb0V697tFRsI9aEo11jEkSwkYFWVFPq2fHad3G5Aq91sWDVAReGQCb5l92bEIRUIJGbCBC8X9FmS3wwaq8wl%2BrMidIYqBWi3j&X-Amz-Signature=268626a90e4c370b3a471492791be61fdf3562927e3d29e91128f44ed7aa8328&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
