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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN4FNVUN%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKe6SKC%2B35VNqrtBxq%2FO4oRTNth5Mb%2BWtLQQwQ8SWaTAiBTkyWR4ziDEkdfesnopuFNlWjxLDKao0XiPfEw0YbNnyqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI6EEE4CZua5BtpfFKtwDSURTvDErGWK14Vm%2F2YrxvSwoRronUERQAXRPzw%2BZqnr5zVaTCClU21iaIj1QQXbP8tD0jrr8AH%2FrA3cAqjbTvlN1goQSwc4HT4EC8DR0eMehGCaWs2R34Lz3JEzr0Y1IadbNQ2C4PUQJHCs75TXdrrimQKKxbw0Dbt36jM7dSfS07ScuEm6TX2FZBIpvOOXBF3QGt8CR%2BPw8o0CyGbj4Y5kvAdLnYlHfgarPOJaxLJZNDV7xISe3uDxoyG4wnM0mSBe5ZKfiy%2FPbhz9Th1AjGcJBDIf4HSInoJh6NfPfPI4iiwT%2Fn8SGF2pg7M8AzBaiv%2BwbMFnICoW8DgyGYivujTjr8vBBwllW05nK4xDllA6BpSot83bo75HztOevLLyF3BCheKac%2B8AZtogKtrjw82RQSXW7OlHLrZNJlICK2L8Ipc%2F%2FyMwJ9164ySHfAcuTbVDJIocqtTXDqNr4nAjuDUkbncDwv21r1%2F756BuO6rYCdXuSXnerBnSlwa%2B%2Bf1H1%2Fkl%2FCmOClvCxnfzmfSsGpKbm2UgNgdEOESpWogOaKpUVXsOCciVeEOiHCjv69f2Ku8sbZtlHL%2B5mm57OU3hZiZjd7yAMf6C2oZc%2BPhId7wnLQzbJPT3okNIyebwwqdXFwwY6pgG37ZCGpkTrtNe%2BBrvqdm8ncjQDdRNkgGwhPYNm5kSftsiQ4MVXy5AG9s24bhgypesnFM%2BC96Ccg0A9lnongoClHcIWdFRZZRu3cKY%2Bu44Zhpd7rkTLoTo12vRGS8dL35gnQO6eWwSSMpHFN%2FcsbnDszm3BpRrwWosMIAN%2FhXxWWTDbiRIvqaGY2IRTChQx8pQVpwzIK%2BsZzU%2FQduDBTBvffS6SBkfm&X-Amz-Signature=de3f6cfa0faca733798d9735b6afe7fe960a02fe48d7d59706f093133d86950d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
