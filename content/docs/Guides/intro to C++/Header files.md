---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Header files.md"
title: "Header files"
date: "2024-07-08T23:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 117
toc: false
icon: ""
---

Unlike python or Java C/C++ splits its files

<details>
      <summary>Why do we do this??</summary>
      In C++ we can’t use a function until we have defined it
  </details>

`.h` file (header file) is like we deleted the body of the function

ILoveBen.h

```cpp
int ILoveBen();

```

ILoveBen.cpp

```cpp
#include "ILoveBen.h"
int ILoveBen(){
    return 10;
}

```

main.cpp

```cpp
#include "ILoveBen.h"

int main(){
    printf("%d\\n",ILoveBen());
}

```

## Classes in header files example:

## TODO explain y classes have a :: in .cpp file

Ilk.h:

```cpp

class Ilk
{
private:
    int milk;
    int private_func();

public:
    Ilk(int milk);
    ~Ilk();
    void drink(int galOfPilk);
    int getMilk();
};

```

Ilk.cpp:

```cpp
#include "Ilk.h"


int Ilk::private_func() {
    return 69;
}

Ilk::Ilk(int milk) {
    this->milk = milk;
}
Ilk::~Ilk() {}

void Ilk::drink(int galOfPilk) {
    printf("drinking %dL of PILK\n", galOfPilk);
    printf("%d\n", this->private_func());
}
int Ilk::getMilk() {
    return this->milk;
}

```

main.cpp:

```cpp
#include "Ilk.h"


int main() {
    Ilk *i = new Ilk(420);
    printf("%d\n",i->getMilk());
}


```

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666STOH45%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T021437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FnfDaKk2JcXGzBCCcMXHK3UgR4rS5%2B76oGvmTTGjm0AIhAIs1ww2r01ZIwL%2Fg6Phq3lIcFAY8gOZNmMMCkQR%2FaDhoKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoorWeWyRwN0PBrHYq3AP%2Fh5gUlSrMHW4otulhAJPrj1eJHriNp2gDXlC8bxiwzsHdISMdIGesrKHr3j6PQIJyD9BhKpQ%2BO%2FbxK2j%2B63D1sG%2FxS5uuSyhPED8qYObKd494%2Fv0hwJM5J8CsrNqMRxkXpHV%2BbGAn6bDt8bdumZcl46looSUIOwFbiaoWy5E%2Fc3Co57OdLk8GbN4ifRG7YxcN2vjKoZdhCjUYLei6oh%2BwPztWsRaHsM1%2BpwnkEeK8vmhOCw5ffqVGZhpdofOHtjQVunsg5xEMf8CI1WsHoS4nxd5URmUZ8meOtUpW7yn4mqjTqkcDqoJhxn5ZMOhr1JM2xF50MA5AVHT1UpIxWKFl8sxEq6pWIQW9DvmtDVNmIYb0Fk6NAy5jgi11H87TkLNkx8ZLNzXv%2FJkLDdz5PNV4Svm6aQGFcA%2BVWJAwJ4cWLyrbU9t2zgV6omMKKkggVy38ZhbyNS7DloEB0ub4KpnguT2luafuq36keXtKdaZDNvu4hLQQxGVSyIMr8ez07rWst8zDPEzMp7hee21p0yhtzNkgturkYdMxEbCANmSPROs6jO5ByJTgRQ7uCleR02EPlbexz8e6ZF3hJxHAdWuNEAnA%2FMRO3SHgvijivrUVw6nYi0gkMuDGEMS0NzDRw56%2BBjqkAdtwS6YxOkxnZQS5Y7iE4zd6uVuuXGe1ZzjFEvwdIp6I3KqBw8kMe2rAyFGpgsbTmda4E%2FmXJNXmQJNyvvmozmLZmAWhbMvMSCy8jby14VQLkXD5IzK%2FyYKd%2FKGoSu7GNsdloEJZ3vHkMw%2Bukhb6pebtMuKRWyVuYg3m1mH91cx8jIshuaoG0KbYEzpkiLoSUxkLFvT0yYuZrP67hR0738eHn17O&X-Amz-Signature=671fbb22077446caa06d27bc18fc177afe931261ca5b8b45d61f5993e935a476&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
