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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CLDSH6E%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T160819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDxqwpLJfK4SovTYUR9uaNqlCOT1Oe0I4D1C1%2B3taRH%2BwIgBXi4csVGm3XwYRJPkYWPuQx7U8iNcUlOJSd5TmK7%2B3gqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNiC94uR93JxDBm4CrcA1oiXC92Hy%2FZUO%2Fnj7NgG50AisNT4Z1BsOasqTJW8PPMwAhuA8RsvV2v1BMkNYYvj6a3aV3jps8VzzuHDq7Cpr6263rKdzv2wHn1raXwETok8u44tAv2YLPjq8UHy66Tva9p%2FEVTJ3Fc3xXNWvW9OuSdOlD2TTh5nyNgreoD8kOxTlKnTkKYj8n9AYaEz91Y0aAl8lJpLElQZk2k258ZnQp1BhVBMhql7Mw6wbY0wq5ffcZnUqsNu%2B8Lw8WeR1Fkz6tHsDoQdyIxJ%2Bs7F4zbz%2BKhA%2BygoKbs038cSe2HKcZULA3mfEmEcbZR%2B%2B59SecM8ARV7FefFIMxbESvZrqvnZItJT7r3SOMbWjESWPs0j0JWi82QT%2FTDhpxe5SSSbp6frINmM%2BbWnm48iUw4dmoYCdKlqBQW2z7I8Krs4BoldQiVEcuKOqleW8w7ksKzOdyCz38mrpq6KH05Am8yNxHzmc7EuxVPrAu2yNTdx0m4%2BtaKsKSnADOzV58JypkfRoG8dadShr0FmIj7GxoCEIzEJzO%2FURg5Cqrx8oLVh8k8eClPOp5tPDNrWmtb8nxg1ABEQr%2BwimLrI3cWzTXJ52X2PDIomlZNVrSAWJRmnyn0sR48P28phnUKdT1ompwMKr76b8GOqUBcjH8uFrDTM9SJ%2FiV1WNHiueStEBPcTOXz2ykDAYFjvOcsTW%2FAbsE8V7cBQijuzb06jVUpXqSce87KFn2eWtR7b7CnFCelJvDDfIGNmiSU5oZiw7yoz0HJsd5ULdP0vQ4na05605VhiIBhIujuDYkOtaHJw941pa50iAMN223%2BhtqFcC06Mw7czu31m%2BIJlK70a7uS8fCy2N6JTqiUqaEcno6wCBI&X-Amz-Signature=627dc68027442c561b1b713b27bdee04af150d2719f271f823fc828e761a7822&X-Amz-SignedHeaders=host&x-id=GetObject)

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
