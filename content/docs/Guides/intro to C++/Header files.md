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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB67UFEB%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T210652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwXIfKnvHBGXkrzlWwBAYWvX7N%2Ftix3pASC2X%2FbWMyiAIhAMNkbUrL%2BUUFcIMeusSIHip1H%2BWYGllHySoqMN9Bmi0%2FKv8DCB4QABoMNjM3NDIzMTgzODA1IgypSaYKcC%2FntNrsTs4q3ANcj0Dr%2FQFgc8LWnAnRoz0xKAwhYXysBXNXunL%2Fwnb9haxTpktxQ0FfEmBgb%2BydFSLUVlkmAdb6RpOxuCu7TNV8QVbeDdPoia6MAf4K%2BGquC2cEozIm%2Be35dXJ1UT3LvHtZrCH%2FqeKvs%2BsbU4ISy5Fh8WhFWLSXVH2h1SHoTngsaUnC3rJmp21MSO3HR%2B%2Fo5kEnBcpYKMQ5OTE4t4YNfkeLobZA%2FZzo%2Bb4bG92sQ2RzoaQ1qa67m8EUQaLiO91jLh3auImxnAnhUsPpmXexTtZB5n%2B1JSAyIuJY0PilN04vkAiC9Iaav9pZQDs%2BTfJiTmS%2B1QzGmgjFUiC9ZCyMtNuQYgctrAP%2BTTiBPTAIP0%2BmJDcsD%2B2gyhREOE9EtyLv8nxPKpAQ2xWl4TkP0I%2BeBbCpFBocCOnK0ppFR0DIMiLuR1GZA7GsSxEA%2BqWLuJHALmpk8tN62rnZ1%2B5F%2Fz2RAuiD3egEDm2uyiAcx0ILxHvBxkPoJ38nJs5023KXIR4XmkpSU%2BSPsSbl33SHdCX6XT%2Bx73Lt1qGGQijT9C8zu4y8nG2vM6SDDyQf1MviPsK1XZxFNxrLiGuAcjRO16EaK%2B2u035ZCkG3AqQCBnaKk%2BbWqFAUyFzpjMDiCstCfTDQrLm9BjqkAXpPvRDRlw5wEFgDxv5rF4ippn6dDVYHQOBoMpdrs%2FbwxTz0XFvYwz0CagbJnsxWQvnaxkLs0sqe2QCYvLuCjfoDiNvg8dCzbWzXeLkCfcr2pZJcsUVRznDEuXRTB8Q%2FsEdIFS5dFGdg91E0aVuWyRLyycSKVznfV%2BhbQon8Wn9dLu0rU0d%2FSIvag2KG0qnhODrvQeQ7Qcfox%2FfAIlZkZXR9Oafb&X-Amz-Signature=13c62bb930c49c563db635f8fd5cc42fce266b6bde8d602674648ad6acbee4e3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
