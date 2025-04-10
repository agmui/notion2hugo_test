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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTNVSZZC%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T100941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIDruujqGNb%2B8A5libVMLo3%2BYawi%2BfRc1KKtc1fWejQevAiBo%2FqvIfYQBnf%2FjzzHHF4fhSkurczjFNAijdKU68CZnjSqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp3riIIJwUuU8QfHZKtwD%2BXaDNKJYjjH8qlFWSM0SMyvqb1e33yHcgLIxRVK0uSxqF3UeVpNQW4mjgeMH0rboSchXskb0K%2BOpUX2o0eJZ5Djk3B2N2V5PjBP94EL1gvQ5N2mlZsGKOFfM3oSBmpkVJyGF9pw9YAa3Siq7cHmwnliSgXVkh78dm0rhADnHs6VgZy5JWRYOHAbpV%2BRgPNje9rqUitPISALUGcHeroTGHcBcnlm5sHRQqEV5ZBzg6smM0vuOzf7Mr3bOAt9UiMaH8QU85SkGai2UMVTvFT3A05XzMIvYcBdICUg1phLpF6sHc1tsgQuW9RsAsfPX2DJVwvp2Khcg6s%2B6XhENjA550nEU%2FosO5Ig%2BHmJ9ahU6eLWsYVfq3bMDhu%2BgHJIfbyCetfZEqJh9pHN10pirWfgDOhzGkixR9HPvYMxoZ9F5snoGsZ%2FVhE4mVzz3kP6tZ0AZPCtgpf%2Fui5oYnoXoV%2B24Hw9%2Fs1ik59he7XFHGqoWu2QDl5NfV7mo2FXFpTe9aJJ5PFUcwdhPw60tNUsQJ4glx82Pu45%2Fzz8sVNN2zgHliBSx4Zw7VIraFwT1FB8xqBGmwoDmq1zrMy13KPNCD60RD6brOrLRB0OIT17Sxk9z8ltfjHw5ZhQkZCXlyRUwvqTevwY6pgEMzC5dl3FWXTx2d68%2BK%2BfJPNOviSziT5%2B6GvnUB5V7nRizQtFPj83FF0X%2FNg6uhV0djy28JLQUYyotXIzsfIY3uRIoaWQuey3sm2n7JfY74w6n0f79s2l9sW0%2FUHEReYiF%2B8SLKL2PqlXBbLZwjzIqyZJMJIceBbvBxwP78sNk0H%2BPEVz5ELtB%2FaPe6cb4%2B1jE6hY2QeZvBvQ5PXYkCry7xxVwSj9X&X-Amz-Signature=b21e6caccb838202c33b82aee4de14ae5475af94957c906ea7e3a5c75b1c0dc5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
