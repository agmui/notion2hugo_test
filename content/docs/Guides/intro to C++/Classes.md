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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2EG6XTQ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDg1YL7XHMLMkC7DOhMKKobjn4YzIr8CKqSJOjx%2BeFVdwIhAOYHKg5FT5%2BkDxmilLmtCbYWNNcSxiYD0BC7kEzBWzFNKv8DCGIQABoMNjM3NDIzMTgzODA1IgyJ6k2iVmc5o1TmeUkq3AN57tlqTTHO91%2B9tOrygG2xEQkbFNXqsz24ILqUnyBiWEtXrk80vyarXhPfU96smQKIlRwRMOhvUKwvtmRCMwadqsJGH%2Fw5OSFhqr0br15Xq9OQESsi4Hp45BaHOp2EjNlRWuRLvVC%2Fsqdr8e246V%2B4u%2Fj0hW8B7trEyjd43i3n53wMzKG2H8g%2Fk7z%2FDu2OIaYT4lnWJSzTMhkG0wfpaWnU%2BVpefEIuDuPoiqdEJp4R7nj28i6tMss71f%2BNRcIGoslKNNrWtmEuGcUQezefhXn6srWg72tPUIqlSdpwA%2B7kc4%2FJvU%2FQZmlxLH8%2BzUl1KSy6xiFfStb28kfUoF7PbYq3RHxflTq0sUihyJdSV0mUUOTuu8kUcdgpsXfnOFhVdM%2FWPhfeuQTaIdNtuLIbnykjp6M99aCUVbG1W%2FUKHsnM5ijYVZiaOTfWYUgCVa8byO9FOjDBLlXX8lLi9H3HH%2BVpbus1wyXoL%2FobEJw61zOugObSb0xRwIJ7CVG9UvUeTgRCh0X5OHMiQsc9l43E11lWwZD47oKXTlp5bsldZICb8WEiLxJvmAh4R3QVF4Oe%2BqSIaoztghI9XreOyvdLri9GkLLM4PE%2FqVU%2F3j%2FHhhCFWEs6OPkk2fPvai01YjDh2v3EBjqkAXL6%2BtISAf2y%2BVjWCHFUxmif%2B7bg4mx92IoED687my5YcVNvuwA9QrjEST8wF2Hrb8M3bxN0h1fSfeWyefj6hJC0onhlxl%2BwUe6o4sqJi8ZJXmfYng%2FF6rQ58wb3hsK%2BhM275JAuFyQLa26Uooj6AWMyYzfMEvBQcY630MzeoWK5CvuyBHVWoAfchpN3omR9THteO2Ye2NZwsrigog%2Bky59fGZWB&X-Amz-Signature=80f0b93be7e025cae3769e788344602844f08df7be7cc150eb3cf94987fd8cc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
