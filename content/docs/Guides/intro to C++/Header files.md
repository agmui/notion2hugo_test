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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N3AEWLO%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T132422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDrduh5CsL77Ei9booThHAbg0zIVnFP%2FufMMXEcf%2FTf4wIhAL2OcAlE51j3GVQhCYHkSiD9A%2B6hl7Lt%2Bhqob7gqc%2FaZKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXDcQnOZ7CAjai9v0q3AMxu0cor0aKQcetYIQ7WTeNjjgL3Dbe1ZbdmpynHnXieiOHE8%2Fs15e9sYh2voz%2BMkpZn%2Fk8oLFT%2BFtRbiRESPdGHweuwNBMnf0Gqfr4Il%2BYYyvnpJrsSdCFQDn5iUMHqjaS8Xy9yOKujUInQ15fKOHWUqE8gYZ0Zrm1bL%2BILPFTd1FpSZhxIiDFeIz6%2BTWWLROCVim3%2BuT3jZqWqExea5Ap%2BV%2BOXUp2VmYJk55QFSZ02t%2F4catVnMv8MP6v6ndy8DzkgqXDdk66LdIoWRPdwgguvkwBSIy%2FZ4UQTzJsegSmxImDBUhG5DpZdqolR9UmeMSlrk24Suz89acbGr1PcPP17h2EmfcSy%2BisDYUQ9vNOJMfhyNYs5PM4NDspYGCgnMGENvfinDDA0Ig2Xz1WeKEhnkK7w9Q1uqGdUAufrF3WPaYF4tbEvJQbT5EU0eGqeaIhD6UuJEl%2FM5Hqxiz9ZAmzZrvkfTShqUTpm7BiHZzDsSbjogWoTqMaZg4kA%2F1lhj%2FqjkwlvF%2BGyHVuJ4tn6hj2Z5bDGIZi71XkPnpLGZKy%2BBvCVDFde3CWMz%2Fh%2BVOc9QAlqwO80CtiYx6FT5Ge58O48KtJKBXpFcQ4KQPMBbEWvTdeq5Vs4QtUqLuTtjD6t4fBBjqkAWgI3Ma%2FESowceyQdU5RX7kcz5fTTp31Z6FqJsa%2BtW5PwVNv7GpG9YgbQJ2bo8j%2BPSuyYhzV3KzXP204Mzl3P3pnVG19O926glBVY%2B1YLSvu8EjNoUnO61Ht5zeIgwEX6IEj1j%2FgBYwfJBR%2B9h0QARUTneX0fgIRjz8dLUwiMo0P6MXSA2yB%2BiEmBzUjIlfW0sdCy%2Fu1bO89j9a6hsAEQdwS280N&X-Amz-Signature=aaeae351a0862c7f5710b31308c7e5ac60f0e765fbea9bdc93787430b275a92a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
