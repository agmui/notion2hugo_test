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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BXMMG7F%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T181039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxRLrfECajQ%2FgITFb6yQzpr0f4T%2Fl4OMmMBReazul%2FLAiEAw8EC8mF8yCCq6wceWGvdA%2FvQyOSDPXvJC%2FC34pPu2l8qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAeFin0AKi4adRkkGircA12hb%2FZrCcID3E2wCqI45ejfHaQ90TobKtv%2Flob1DYy7aTf%2BQ6SDDM%2BHjs%2Bg6nbMNnUhGw7dHbwzYMRtLCYkjwWqByQiOmJDrmvQVkjnnyOZe7ddj3%2FBszIiWagYaZol%2BOSTjJe4gdZixGeFvUykOHZFTeZJQQRZ4MCViEff%2BC%2B1HoqHXP3ybKPe9r9c7JEcWC%2BkFUmQudFWLZa8tHi4JzJVgVvENOy1AaZ%2BtdZMXpZSUXn9OgtgSgIwMlu2EyKs4si2vXEhAQwIJ1LWI64YeCwYwZvFoxoLpVBzkg%2BAHcJXE0cZ4cW4OVeEOjZ2nUP3cw4fIhuFlqy7PDd4Lt7BYwEYxqTgruWPXKbGElcyjPghDmU%2B7mTsQT6gj2%2BVyuHI5cIXNXIM%2BkTzwCTG6WWpVM37IA8lCzUHMMOHN64YcTjPZkynLtQr0h83J2AIagLefggcJST1q8O8fIl0ExX2HgOBZ5DuzSY%2Bjw%2Bzdg6g%2FyWF0PelmrDipoYcQWGpqX7t0CMeSxfqJL09E0RANftlTuX0GnWAQgRmtb%2BaaV2VL4LHVayH9EQatDpDnEinIn5lUc7QgKpsWZ11BBaEH2NzfsnpnG34A58IzXwtxW6mlhCHKPkP5jJLcooTEiStMID7hcMGOqUBhZnaj2VAZSkq4KaSJIDgMLjzgh95sYJHNaryTnTQcnYvZgew54IDr9DWQXZT7l20OnKMjsXZKjQrRa9woch%2F9shBfw0F6kC9jpHrjYYxBRIedtZVfiYS0pYKVl6WpsgqpjVLCrmNcJokXuyRNWk7rhQocuRa4OWPs1JfC4XZZyX1Tce9H7ddaERsrLP%2Fcu6LVlnnN9I6b62UuEorBdanNWu6j1Ph&X-Amz-Signature=3a37d69b27beb3eae01cd294fa985eaa105873d64c60972803d49067ff227c4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
