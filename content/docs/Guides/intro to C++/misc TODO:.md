---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "docs/Guides/intro to C++/misc TODO:.md"
title: "misc TODO:"
date: "2024-09-30T17:08:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 120
toc: false
icon: ""
---

### static_casts/ reinterpret_cast TODO:

 [https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/](https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/)

### [Literals](https://www.learncpp.com/cpp-tutorial/literals/)

```cpp
#include <iostream>

int main(){
    std::cout << 5 << '\n';  // 5 (no suffix) is type int (by default)
    std::cout << 5L << '\n'; // 5L is type long
    std::cout << 5u << '\n'; // 5u is type unsigned int
    
    // basically the same as
    int a = 5;          // ok: types match
    unsigned int b = 6; // ok: compiler will convert int value 6 to unsigned int value 6
    long c = 7;         // ok: compiler will convert int value 7 to long value 7
}
```

{{< table "table-striped table-hover table-responsive" >}}

| **Data type**  | **Suffix**                             | **Meaning**                               |
| -------------- | -------------------------------------- | ----------------------------------------- |
| integral       | u or U                                 | unsigned int                              |
| integral       | l or L                                 | long                                      |
| integral       | ul, uL, Ul, UL, lu, lU, Lu, LU         | unsigned long                             |
| integral       | ll or LL                               | long long                                 |
| integral       | ull, uLL, Ull, ULL, llu, llU, LLu, LLU | unsigned long long                        |
| integral       | z or Z                                 | The signed version of std::size_t (C++23) |
| integral       | uz, uZ, Uz, UZ, zu, zU, Zu, ZU         | std::size_t (C++23)                       |
| floating point | f or F                                 | float                                     |
| floating point | l or L                                 | long double                               |
| string         | s                                      | std::string                               |
| string         | sv                                     | std::string_view                          |

{{< /table >}}

### Const

- `const`
- `constexpr`
- `#define`

### [Enums](https://www.programiz.com/cpp-programming/enumeration)

```cpp
enum season { 
	spring,
	summer,
	autumn,
	winter
};
```

### compiler flags (`#ifdef`)

before compiling we can have some options for what code we want

For example, we can have code only for tests, simulations, or hardware

this is done through `#ifdef`

In Taproot the options are listed here

{{< table "table-striped table-hover table-responsive" >}}

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

{{< /table >}}

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6UD4CMN%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIC930t3gHqnwqbgTb0dr23OuJeuDJVxicsRXZu83TD98AiALq3gwUtPRYQegcZ8p6qvkJA5iePSnn%2BnHTy%2FefKs2CCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMBeZvMiPAqHouky5pKtwDJRgyyJhLErOOHtolk%2BSRQNek64FzTqOPThOa2HuT%2Bz6p5ZXhyuK3pBmoWTR9leoKsjZ0Zb9ZWG2Uent%2FFSTsabuSN%2BSg42EoU5pP0FCjsKvDokkV3E%2FTcSB24VoChh%2BohlGLj40TIwN%2B7RgYub58%2Fq2nshz%2BdsDZ%2FcTampo9Pqy4CYcoeKrZyqa2KKjjchP5GfZmJD%2Bz8MW3T0vh07ZE2TL50yEkcAz1EVLijsA12ZKW8ZTrLyWlR%2B8xGVXFIgtH9Rfh52MA6Wr3DkUHuKYSL6mqhZ0DvnPPxqYdHUpd01EoBCw6CE6JVLVHSdCsQOXB3mZCO1dJ0%2FQe9kWqwb3fKQCramt1PlV2rN5x0wKdHzgQtm4SEBe2xH4OA9Syhh%2F0yi4QROho%2FD8uqmYsGSNFhO1LFM47kibroy%2BPRgc9m2dUTcu1KzirCDBPsChddUgOyxioiJiGTF8J1%2F22lfohIqrzt7IH9nZOGrOXhG7R64aacJoVBiBA6CGRDBUMJd7Rp6Bx%2B%2Bfw1JXJl19Kzrv73dNaqXpAKbtpF%2Fnt69LJ2ZtPYNtGK6St2bGz5rkPxn86VGY6NmkBQN%2Fv4feM4DehofFSAbWymS16G6eRx%2FwibxCGpwtpwx75D2TAwSow17DnvgY6pgFK7B5CsIVoX4B80jYjkJRx2amz1C4F8CG6ft2szgrvbvg2w%2FHUItkmnS8QljLq57gZeOVHGUGGt9WhhpCGAVz1E4%2Fj%2FygXWj98r1Q3CJHKcVPSMjPO7UR6qpU62vUu9yfUT2Eiw1xilCep9qrlb2Ompl0V2cn6A76GDe4jgMMsQFtvclZnhjdXpc%2FPP2dbZCApB0qT6Ekl0WA94FPC26sUXcKbT3s3&X-Amz-Signature=ef991cc6a29e62d5d95f704f82bd10e467e2d44132d6d4900817a9966029d23f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6UD4CMN%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIC930t3gHqnwqbgTb0dr23OuJeuDJVxicsRXZu83TD98AiALq3gwUtPRYQegcZ8p6qvkJA5iePSnn%2BnHTy%2FefKs2CCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMBeZvMiPAqHouky5pKtwDJRgyyJhLErOOHtolk%2BSRQNek64FzTqOPThOa2HuT%2Bz6p5ZXhyuK3pBmoWTR9leoKsjZ0Zb9ZWG2Uent%2FFSTsabuSN%2BSg42EoU5pP0FCjsKvDokkV3E%2FTcSB24VoChh%2BohlGLj40TIwN%2B7RgYub58%2Fq2nshz%2BdsDZ%2FcTampo9Pqy4CYcoeKrZyqa2KKjjchP5GfZmJD%2Bz8MW3T0vh07ZE2TL50yEkcAz1EVLijsA12ZKW8ZTrLyWlR%2B8xGVXFIgtH9Rfh52MA6Wr3DkUHuKYSL6mqhZ0DvnPPxqYdHUpd01EoBCw6CE6JVLVHSdCsQOXB3mZCO1dJ0%2FQe9kWqwb3fKQCramt1PlV2rN5x0wKdHzgQtm4SEBe2xH4OA9Syhh%2F0yi4QROho%2FD8uqmYsGSNFhO1LFM47kibroy%2BPRgc9m2dUTcu1KzirCDBPsChddUgOyxioiJiGTF8J1%2F22lfohIqrzt7IH9nZOGrOXhG7R64aacJoVBiBA6CGRDBUMJd7Rp6Bx%2B%2Bfw1JXJl19Kzrv73dNaqXpAKbtpF%2Fnt69LJ2ZtPYNtGK6St2bGz5rkPxn86VGY6NmkBQN%2Fv4feM4DehofFSAbWymS16G6eRx%2FwibxCGpwtpwx75D2TAwSow17DnvgY6pgFK7B5CsIVoX4B80jYjkJRx2amz1C4F8CG6ft2szgrvbvg2w%2FHUItkmnS8QljLq57gZeOVHGUGGt9WhhpCGAVz1E4%2Fj%2FygXWj98r1Q3CJHKcVPSMjPO7UR6qpU62vUu9yfUT2Eiw1xilCep9qrlb2Ompl0V2cn6A76GDe4jgMMsQFtvclZnhjdXpc%2FPP2dbZCApB0qT6Ekl0WA94FPC26sUXcKbT3s3&X-Amz-Signature=06ab15f9d41ea0d38403280cb254b47f5caae96a4fe20e0668f6bce299012389&X-Amz-SignedHeaders=host&x-id=GetObject)

## c++ practice

Using everything you learned try to do these:

- simple ArrayList class (try adding these features one by one)
	- class field should have: size, capacity
	- should use a template and namespace
	- Default size `#define size 4`
	- Constructor should either take an list with values,
	 or nothing and just create an empty array of default size.
	- methods:
		- constructor/deconstructor
		- `get(int index)`
		- `edit(int index, T val)`
		- `double()` doubles the array
		- `append(T val)`
		- `print()`
	- If you want more you can write sample classes for stacks, queues, trees, etc.
