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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMIZIZHE%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T051038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmuvQdbKsUp8l61PCEhsynlD8KeDRX71zrQSxaSeal6QIgdrs3riyrjI9aYjrO58iVuhpKThAsRLGm8e%2BumiiyBF0qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCbZ0QvamKID1ufiCircA4jNGTW1lHK9PghllR0l%2BrsHypua%2Bbo%2FWAhvKw2Yv4ADcbIzkj6WRxWfk4zjzTyIoxAmkOuNJ9jsWdinF8FoyTFCNsi1OsnTYjBE8SGwngDCUaGegxJRPAUTo%2BQ%2FmKjZW4mNDMnHRfeQyWRbRwrDiMgtWNDjOUjTZtlvvuEVnO7WVly7P3duGWk84hVu0k33vqvCmYW8kFB0c8eDLFdEp9zg8jWLeReS1%2F1e%2FXc3fARx5sR1pzoBUzHBrUxFMHMQb6eXoGjCNxuehH84EFIVbfjAr2ncz9uIiWzLuZxESA2JvAuOpefpacb09p0DG0yF5EoeOyIl%2BhFqZG%2Bx1XHhN7Q7HDWDkW7MLNSwyT1nAwOeRmZ6hm2dwtm0%2FBA8rHHdHEWYRyhRlNETfl0k6oSt0YmiXbC91g7%2BLVQsy3R%2FnUloQ7sSR08ezc2C%2F06Z%2B7bZTdNOfnNOoVydFE2xnd%2FEgcQ8Pfc1ptTfEUUkgEal2tiUqVmhQJWnA%2FChF%2BF9mU1hDBmQByBp4iHgWW9op5qKdF4orz%2B8FoIqEoGB4kvJ9LdvulU7wULxa6HfSZK2pjAzx1KsdkdL9JnHrxOLXanLw6dNAd%2FY5jf%2Bj7UBul3IryS3h4x4hX15ZmfFD1CRMNehyMIGOqUBvRNO85p6B%2FqUuI%2BXL2Y%2FzqEmiqyw5lyEDnRWkB4sDnYwIJ4jB3nsS8pToZL5mBrr7iEAZ51w8EPWv%2BsFyjV%2BfuKpGaG1%2FKxUDPWGz1xc1zu2yruJTmx1iexOV%2F8WH5d6Q9M%2FtyYZO8NlSPs%2BqLKKLW6l38SsxLCGGCRxJTJcMRVlgsKymC7JDduHDp1nWiW9wMv%2BhKOTouOR982gJF4rZguq1Nri&X-Amz-Signature=44473ab187a1b38ea788e8ff06984017a65f22bb699b5ab192415cc6bf3ea80b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
