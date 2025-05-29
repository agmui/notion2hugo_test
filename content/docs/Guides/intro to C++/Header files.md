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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZPJKGBR%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T061313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOrY4nt9F%2Fk7Hd3OoNTj9AivnKtOHfGIPScU3dnwxPEAIhAJyw7lirRY9BPnXOheiS%2Fylv1unsVZBWVx2vQz232c%2BmKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyK3O1VNk6yyJf9WNYq3ANoFx1umP4Lh99JIEO8mQ%2BRQeOMifHpU%2FM%2B%2F5TrVQ6QaQoT9ediLNeq4nakk2PW8qbB8O0ZW%2F5hLaZ7g1%2FXUQmbiZqYbLCoU7x3%2FCQo5vF4WP%2BNFwusHMyBjwoE45r1FhKfLkFd1HeWshc9LwyXpG3dKP0bmODBHZVLoHGiwzcJ%2F%2FweMAo1fBKdVURoRzLNwakiuDpo%2F0xHn81A5ceU4JPkmTdqr2x1eAfM7LYE5mTTRSekab2lKLLIwq5PNML8T8LXp%2Fb0d7mEhfjaeygRjuL2ByEmRIpPpYaJbfRLuhzfRve43QicH5HyPVQqtDwNrP6QQ7WrVPKEuXFeKTlWUElBF536oc1m08cX52D4UJS9wqZqWb9UcJ2Th%2FUue84atO20sZvJT3oGpnb7MRTnSA8GtGnRRsTkD4%2FUAq8taWYYo%2BVVFoClvQetjIL1UW2ib3q1sjZlxKDTVPd9wm76wK9Z7ivTakna3LO7QFxnKxe2Vcw%2BywV9cpOqX2KK6NIyC0J%2Fl0M99k%2Bsnc5L1j9cgzK3y4x6DRiW4cRdvaQZvPH5lUdFK8qPx%2Fooxg%2FZ4uW%2F%2Ba957MncMUkoo4Epk9KweCZEkXJAHwTRQ4B2G0nurkfC4GC%2BefZe7Q6D%2BETkwjCe2t%2FBBjqkAXXyq3WdIjoVvaAZZ1LdU55VYALAjd4Tck0SuNmHwytuCYxfcCfTIg3E6gZ2t8dNI30CIs2B15GsNwT%2Fe8tAExhyYSaa6S4gQ4QF6x6QiDoa50%2FgigBmrMy58%2Fz9ANrZBoHPQe2OT%2Fg8MCVnmgDPYy10D1dQi139MCI6Nfib%2BdtIdHwvMn3RIssga7eLZ6b3TVfaY4wEp%2BS6WpN3L%2F2F5Uc7wUi9&X-Amz-Signature=ecb5239732a78957ae21399f3e35cf1d222e008b8955c032a172ce09ac887e94&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
