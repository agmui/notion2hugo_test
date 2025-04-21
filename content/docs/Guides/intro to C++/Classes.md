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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KOCUCZD%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T004227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIFyeKc%2BVDLAzXczkwGn0vx0fy%2BWr4KVoch5m5nOd5H3NAiEA%2F%2B8H2nvWa%2FdN8Yn1VPvwaIaxMLgxzHfWsGeM0qNQOxoqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJlseriKh9cQWP%2BmyrcA3arob0FeWI29IkAEiQxhBhvDTfV8QUtvK6k7%2FwtrSiDJFAlYVMvQGIX61Tdgz4h8QyCnxjOOEpTVbpH%2F5Vpqod%2FHBjpDODW8n%2FAlHQNq3rpV1gO%2FT7cJ6M1FlURV9nutIYUeIFePd03iQDBSVcuvAMB8FJFp6NgCyUxWADMmPotLg08qNx5h6kz8BqmPgites3WdUtOXAbM6lT%2Flp0cnnA2DfHPLAigianqKex%2Fda3g87IJBYFqt2A54%2Bg7nMrsURrbnSGYli7PrNPY%2Bq1tVtdHim4AwAJbCZ77ufm7FKF2%2BbgTrSRGrxPWmNPrdK98cM4ZHAVXJdYF%2Ffd6NvoEOSneWhffFaoIOoGraOSOr4uHMTrJ4ey2oKVdGMidxAq2cS4vNu9ugiU41iZGVa7NYYoLy0x1ZyqGQgHc4l%2Bz7NLE4bGZrgBedg2wEdtxQAfbc7svS9GK0ElmQPaTY0z0S10n8M1HEwtnpaGZ7I7ynzq%2FhYmMlHx3hMzMNyNiHegCHv5xADIAqtcxVpLI282hFyFN898krSbYOrMSNZYkV9HKyj27Ra3WjUtGF0ub93haaYlaSsL3UgT%2Fn0vdGjaHv%2BGdHC38oKAkc69t3nidqaXQQR4fhktpehbfTM9uMK7alcAGOqUB0bPFOjp8P09RN0cf3UYzJ8SjNPBLYGGMu39qpdLnNqge3hwF4dBLpsWN5baKLoqndA5UkKCE0%2B8JMjPdytusBc45yM7bSGRieowJ9YGIWGflcsVaW2syUAlq%2F6zRjKcl766OAPc54HUskPAF12nL%2Bkjt%2FHuwX9yhdbzR%2BEmY%2BBeTUsIIko3ZJ7QngUtrZYEosmqsy1gdURv9v5nSfatbDMPZm%2BXx&X-Amz-Signature=16984b56b78deb9b9f38cc417fdaf8a4ef11da28acecb96c61ea9f9fdb740c86&X-Amz-SignedHeaders=host&x-id=GetObject)

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
