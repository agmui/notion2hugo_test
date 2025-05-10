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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH5JCDSN%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T070724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbqtFCLb0Pg5kfp1LPW61G4D3SVLbDsLMlo3dlrc3J5AiBaRb1dcfxB3NYFW7xJw5C6gnP5EiLgn%2FTmzZHMBTOWDCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSldN5Y0J3othFdTTKtwDhOv1GJCAu3DWD%2FyXhdK9Pq%2BCgiPuJmpz6lMKfJ1028i2AHg4IywugusDhJ%2BgPwcW%2F2UXyINNB8aCiBuujGBh%2BmLpKqnvyRLkFwnPnaiuy4eHWXE6pvBp3grjSZ3Mi67LWinFR7MXQHvrfnYmWRngyoaVIYG%2BKduTJqu%2BLGwitOQ%2Fc3ABZBn0jYHFwP%2FAMy6zk6hyXutOI46gmQe0hMoEUBDl%2FMKcSQiHtzAL6APq9RuP%2FeFp9HzwdtXhmTADfyqhww1eflzW0kt08%2F3VX%2FBgul5PQ3VttSmZTS1QPMai6zkHeiR2TJUpeI9gury4fUV%2Fcrq%2F7vWbdRwDiYdNJyKN5TN1bR%2Bff6sMMLx4Tgu3ad733VoUy%2FtJ0kKegwOF5LPgqVYg4bYyuGvbPsA3sJGmDbxSyPn8EFoEelKKXJ9YHrNfxjggSoQ6YRhpaUzKE6ltbuSsv%2FIJR3sEIICqONywYNtmMRngC4T2PQIOHJMEsS0NhGgHHihMIACvKOmpt8rE9LylBxlMRD5432wywYxQIBT%2BLGKVNqLWqxW5TP3sqAt15TuBoNOWmSK5KUMcBWTQuexzseWEWb3mHR%2BJPAvpz2H5ryArPKwpGJBz3HrvB3FwwfHcxg9cowWzR3kwqfX7wAY6pgGNYeXflaGFnQCwYR9v5kMYJnN9%2BCpBWKwfQWPMjgRGD9BbRAvuIF4YrxeSbn%2FTVIHEKNupJ3%2F5C8k7y02Xb2Qom96w6XjZ06pvuQlYXLM%2B6ggx9%2BdmXQ7GwQ40BhQLNPHaUQOnQbZ0AGaMFiM%2BkTyVAogiJP%2BJyBA%2FP%2BaXJ5ruc4xjJO3mdVYw7rfocULasFWR1BsjxKzn0eWc8Lfi0L410ty7e7bD&X-Amz-Signature=91feb8fc86698952eb9fd36892deb1f4607000e1f0893d52fe015874b2be22cf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
