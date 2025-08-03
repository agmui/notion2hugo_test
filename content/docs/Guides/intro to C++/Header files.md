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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZZ6NZMG%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAv2spenIVHcJNTGfoB4HorZkS88IwPN%2FxCJC7jroVVQIgUdIGw%2BJv9MHq5xTIJ7YYsYTRRvpcy0E7hl%2BIXdfvURYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDEUthP%2BoYITH0Wnq%2ByrcA8rhtyZK7UetT7QcXdTT4Mp2IO4glLBoN%2F00S7kuqsoD0Ey%2FoMS%2FaOCePtXemzeOYnS9z%2FnY%2FtJnmEiH4suHrs70OmAEWBes%2F4SmXl%2BDAVTaEjVUtAkMHqKL%2BiDKy%2F8x%2FQ8AR7xjpG540N3p3BifY522YOXk6OYZWlYHdDECli5qDqJnZMIEjNCYgnDM72SnIUlbAmw62H7JkYpdEgDdWWiTdqNBUEAOaKYkpHNGvoQCW5ASwvgvrMLU8kidEAdVYTGplyDvkDwIY9EOz7nEaZIIvdZDxucF52TWSAvxpGtTRc30UMDWJGizK1KSN%2BtaMqczrPO%2Bq%2BWxIyaMC75FnCgiAL09OQUW8Q0kGGV%2FDVkdjOD54COxZqtqYfNzQRkQPgB51CM69CrFTmxHfq60yGVxJIJNMuT7Vrznsi8KfeEwDk%2FPVpJvwspXfGSlUqLFm%2FmXahMS5rE%2BvicFyJkkGZqpeIlshTAkWlqz11NdnVR%2BlZooNSZLyPP0AMzdtVS9505J1EbIhqj17wSLbbmC9md7G2OHSHeOK8Hp7OrUU75Bn0PdFNA727zRqN%2B1OSPBbS3ng0bRU4fXTeEAkKhe0XzJDnuSXv5yeiCXV5hHvJow8zTRbbaXUTXVTnAaMITZvsQGOqUBJynM9S0XEyWxu5hXyyc5oaCk0wEyzW1jQQQ19oZz%2BSd%2FXFDw%2FY3L659UTXqEyf0hMbpFIO8U2%2Fmj4va3oFa1%2BhO5RUgdftARTuU200ZaXma7qPLC842w%2B%2BnrZ5EiWUQZcoAOJjmO8HzbHbcyyrEo6jNxAm4eSQUyw21Ni9ptqpdhwyggtLTIvc8NfCaWQTTbkW5SahfN4Vfvx8SkG5vibEirN14f&X-Amz-Signature=6419df6b2e461eb856f8cf0796a544d52a79c67657f1f6f8d999faad93433e47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
