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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQCB5R5X%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T070854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1DW4BdFbl2Ku6bNJdOcYAf05KT9gITJrY4%2BeVdgK6ZQIgDUbgbue8ye6eKrxmjD7ifz%2FPqxaFlLHTOJIltYYTQucqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXnWJ3M9M4N3rUf3yrcA57uc91r4g1wwHUfl1XAhyv83Y6Jt3UGHoTQKqS973V6Udl%2Bq%2BG1JL55TR3dpYEDYtejEzLrOhFmrxPjOdrh4v22Q7xa1IKl9OrG%2Bya6jXyMBADppWpzRjVwqiH3Rc4ak209W1Bk4bx4SD%2FoVLJNTQLhJ0aDcbyliQGWS4bahBDGZg0vPrpTP1XV5UKZxKseEhu3YxDZ3omtbCwbMyX6rV2QhpX%2FOjgXxZikhWTVgXwM8S75CRpP9Wh2XIwcg%2FpO%2BWm6ofZLMv%2BJuqc1syIxfCn9XfFy5s2p7o81R3r5wVFABFsj5dx0JwHPoW33yK7oFTQfUoB4PZqXdSHd4Kvp41n0G8WrNSIS4aQ0DBBJBLYHv%2FO2UPbs%2FtZs5zEzjs3U%2B9hAtyxX3f6Klvq%2BxSHSLKhjJ9A%2BULyIoqW9a62PljoUXzPptLoaysAQiGKVuBjHkPIIGrD98%2FmDVMR%2Fqn0I9ylCnGRNQBOyKaTHhPP4Abz%2FMoft7SF60DoDHPiILOTX%2BNjr%2FlAV4O7XZmX%2BUewoEWMUHq1fcnLS6YIaJiGfNLIR%2BBs8AIuISiQFBoVl9sVKMX9ixNmMWvSH5SHQ%2FYUKL85Cjvp6pZYRuyFUlM3DgHyLVsfX2TB%2BJ5yK2ZYiMPuV8cMGOqUBYoGZ8jWw3KrG03ogRngDkDwO1Z1%2FzOeEvlFpPqCHHYYTiJcAVRkCvcLoAhQbTkYkWP1gEB5boAlb6mddOB2J%2FLqFVzGR0q9puvcvbiaQQJRDJmp3a2RvyvvKPSp70GhfMFO%2BCIdnsfz8eSKNt7R64tJ%2FfYsnmgga2FWVilzgB3XTDFcjgKI4XN%2F0fAfxqgAL92GLOQuWZBPj5OgsefeGERcrlDvw&X-Amz-Signature=e23eb85ee157d5bef810511de83d1d8ef06f269273142189240bf197e42e5a00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
