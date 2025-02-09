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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWZ6237G%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T170150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1x2Q5%2Ba532BI%2FF5GOu5deX0rxHXlfw4j7Gg7BSKPQxAiA6kXXFJCvU0HyYxCfC9qTkmJBHpzZfrX9VScaVIGxACSqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCav5NncTcdprVkEDKtwDeMpcZk6WLddBetlywR1Qv8Jv%2F9bG5Ca47oG7vGn%2BSa5tHq7i%2Ft8YAVgOM1I8vWsKel9b4myNRUNzuxtFfibm5JfJoepbu5XE3YWjjYjTc3rj2DewbUqjh1dEkWfh%2ByexAWez6lVDmrPNwN8D6tXVlAVBqZuTQc8PK897C1%2BvhWEHRwx3ZsXr6VM30kXgiGO91%2FwZOQIJKmdzrbKbn2zyTyLMbrORjhH7ej1GIJu4wwgEHiY7c%2FWHota1Ct4o7bhV4GmhTOfuML%2BFxGgUYeQyI6nT97fo8F7xfQZsRlACqzLtqIZG0Zi6SUUwWR%2FloUD7PlNhiOJVI9YIHa1PZeU9UVQHN6UlJI%2Brxb0iLq4IVSQKqylYgZCIZ5ZGkVfEC2pjT4vvYleaLB7jjrFApxHulrwZk909Yzf62u4h47fUPTIuZwhMN6IwK%2B2CfJdu0MLR7dlO0K8r5CosxAsGKFSR%2FLU719D%2BSapRb%2BDyGO6WnbYU%2Fobir1%2FaMnFIgW7gucR7HSZtWscbXuyk%2Fx2GdnCKVn40vi51pYwDEFoRh%2BNs9fpOzZORSbi9FMfY%2FqooY1PGmeW6gvzDgE2a78jVzYQSdJxcetjdaJwY8KjoRnlWLeSBCLgtU8W9EqacV6Ew6oWjvQY6pgHBYQHBk5P1lNUbuV0OHYHkv1OfArary9gWeaHlyO3lpDfBVb5WJu5slxwCht%2FO4ZxHypfUXqwp1wXqYWqKhtdkuiBAFvqxJZSPbsfXgI%2B3Dzsua4%2Fvw2vlDyQ0oI5u%2FtYMtScsUmPjUAiz%2BsFVy2XwqWZLqQ5Jmxu7iKgzBj3RZ6AGf89GwxuLRaD9KPA%2F0orse8zWFqDUgZcGiDleb%2Fd0EYzzs7Uy&X-Amz-Signature=40d758bebc166b579e3c20082957bfba2214c4dabd4b635b883906cbfcd8186e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
