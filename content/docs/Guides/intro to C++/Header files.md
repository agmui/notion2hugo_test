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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTYEUZ6M%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T180955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCICUUTrf2B8kCRHqkrIBdQjFTtHHWPv%2BByAFlVe2Sq2PtAiEAwcFcE%2Bpc90Y8xJadC%2BtDhfqdW0AQw%2BfBhufzFxjp2rYq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDI0rXXBQ8gNGKGqCzircA6FwZ64U7Ywh1xbBD53jt7a6jH578zzATeSvcqVUmjZJr0cCaL79jOiyRoqTyg3heRHSsafSYaBaX7j8v6kQqQUxbJ4UALk%2B0VH1PUYQVSIYKLjWQ56W59ghrds5%2FUMbDnIPYDtXoLiqs6NI8awstc%2BWVA4r3IFAPr8dNpKWGCJfC4pLRzPNUwKGhy%2FrPY7h%2Bowe4wvse2vWTbt9iym27jCXKqZKFsmvr2duRrgm2Allzgl3WRpI82iSgJ1Bi9wb8kdwObS8KOlYOPb5n5bwRyFm8Jq4%2F9yW0jP%2F49NkEGZbUqf5q6yxwH9VjSYjZU3Td8TflXGXLEoz%2BD2zzJ9oGMtsHZyrFTRakj3Sau%2FXrFBOPdfL0TKyCCdzc%2BKtf6rEZCbYl3sfSjwkyQkNqRAbBbbGvC3YEQeUYUhmm1v9HglfVAlMQSngHuWonUJ%2BRCB7CNfKR0h17rSzPk5Qr4%2BR3IHfdYC%2BGPxr%2FEHYZN4rn%2Bjso5a86WqIWvFjIHHob4mO6mNS2VDlZMdQwrNDzrJhlfOhVQbEe%2BlCK36ymHRsUT0QW9VpvkHU5jdprd5QZwUjtYWNDiOCu%2BRESmPqQtam7ebUzpMGDWIC25q1JCrE9hU%2BWyLmcgjNDsIW%2B3HOMMPDzb0GOqUBgs1BGLK%2FKrfcwsNcjzRqXN%2FB60DUxclWMqY%2BifKH2RhOHB9te0LCLtrmk4E0%2Fqm%2BtXhlygivyJ2aLrwJ7X%2BAqVzA9H4OXdfPaUFCe6plT%2BV0fRjFRWDFGhr0eKJaVCjohI%2B%2BpLg2MeHotKhGHNDAtJSubo8YLOBNZiP7PiwYZJhhSMhPpJ7Hi7uISHYikqtachsfjD1WNt75UjbD%2Bc9BPs4qm%2FWB&X-Amz-Signature=4ca5d4ea6814bc6352028c4200b21db5d0b1e8ccd1c5bd179d8d424410836390&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
