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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7EE6OFX%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T070920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD26wCNAb6qEGAjLaBAgUCK5bB%2BM1hIV0cmJap1ZWJ2ygIhAJq72ABSt%2Biw4AigS9gFR8LbqpGPHFO3xlyMI2amwDP0Kv8DCCgQABoMNjM3NDIzMTgzODA1IgxJz7rNOtse7Ye275Mq3ANbgjBgKGszMhiddTxFIV5Rl4HJqvVZ1Zi2pReXo64euOqOnzezb44FP91XEnWr538IMbGzr2hUSIkyDGZtZuTqAIqbRn42fx8hr%2B%2FUjxCn50GqfN%2BnERFTH%2BXb%2FC%2B7DaxhJIWyJ790Hqb%2FhdHmvyMji7NPc9pK3zuEv8SfhW0kBeLjsQqYCGAsiGFnA7IE8IP0HGjYrBE%2FNScyfKyl3giuAH32ItNfLm4sk2NVwLFRfa%2BaFUdURMYycFpX3VwFtOu9SeLuhlkVuNB5bkWHXniyySYEpfQKRL5sJBYjqOe615UdW4PwHUgkM3%2B4p1OcACfQJtR7dc2Lsua%2Fmq1mWV54Rm6LO2DnqfjLdtiLHYZrW8ZLnRAdnupq4FDWgUhEPexph7%2F20Ug1pPpyUB90NuaNzKjoH4ycx98%2Bd2TEBDz9lmrkwEt2CWzKjJtMHH4JtmBBy1IkgNeKfbQcZR7Ap3GlLAzU0oBSdNm9ykb%2Fv2zFlTG16azQ69BG6ga5VOXS1JMbxzDdU4pxn8DdzHYYqK1bnBRx09xWI%2FCvXOjEyZfzD7E928n1OFjGRXzLS%2FtcMxroEHAcVQTRpsWlQW9%2BeO0at5IkEgMfnkbXGcwg%2BEaNm0%2FP7mkNHfHnYr0oLjD2gvi%2FBjqkAWeBD%2FoFqLwsEhqxyxoaNGc9WpPux65KSiWe2x1PP8xYiRX7VygX%2FdmQXJERoXmezV1RxSNB0XoJnEEspDFlgylN%2BmhKDVi0g%2FiyatdW57TDovmngbY2ayW8ufdY2DHArifqylVQ53eSmvMCoizGoEXCenwg%2BMaMXamDl0UxpFgELMpQzHwQRdg1cBCLqwdVcYq58DvSrM8zuTlUYX78hfCzhf31&X-Amz-Signature=5b2f273930b897145d47e508569634ff1e09fc0ca62e10fa760cb9cf4287e58c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7EE6OFX%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T070920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD26wCNAb6qEGAjLaBAgUCK5bB%2BM1hIV0cmJap1ZWJ2ygIhAJq72ABSt%2Biw4AigS9gFR8LbqpGPHFO3xlyMI2amwDP0Kv8DCCgQABoMNjM3NDIzMTgzODA1IgxJz7rNOtse7Ye275Mq3ANbgjBgKGszMhiddTxFIV5Rl4HJqvVZ1Zi2pReXo64euOqOnzezb44FP91XEnWr538IMbGzr2hUSIkyDGZtZuTqAIqbRn42fx8hr%2B%2FUjxCn50GqfN%2BnERFTH%2BXb%2FC%2B7DaxhJIWyJ790Hqb%2FhdHmvyMji7NPc9pK3zuEv8SfhW0kBeLjsQqYCGAsiGFnA7IE8IP0HGjYrBE%2FNScyfKyl3giuAH32ItNfLm4sk2NVwLFRfa%2BaFUdURMYycFpX3VwFtOu9SeLuhlkVuNB5bkWHXniyySYEpfQKRL5sJBYjqOe615UdW4PwHUgkM3%2B4p1OcACfQJtR7dc2Lsua%2Fmq1mWV54Rm6LO2DnqfjLdtiLHYZrW8ZLnRAdnupq4FDWgUhEPexph7%2F20Ug1pPpyUB90NuaNzKjoH4ycx98%2Bd2TEBDz9lmrkwEt2CWzKjJtMHH4JtmBBy1IkgNeKfbQcZR7Ap3GlLAzU0oBSdNm9ykb%2Fv2zFlTG16azQ69BG6ga5VOXS1JMbxzDdU4pxn8DdzHYYqK1bnBRx09xWI%2FCvXOjEyZfzD7E928n1OFjGRXzLS%2FtcMxroEHAcVQTRpsWlQW9%2BeO0at5IkEgMfnkbXGcwg%2BEaNm0%2FP7mkNHfHnYr0oLjD2gvi%2FBjqkAWeBD%2FoFqLwsEhqxyxoaNGc9WpPux65KSiWe2x1PP8xYiRX7VygX%2FdmQXJERoXmezV1RxSNB0XoJnEEspDFlgylN%2BmhKDVi0g%2FiyatdW57TDovmngbY2ayW8ufdY2DHArifqylVQ53eSmvMCoizGoEXCenwg%2BMaMXamDl0UxpFgELMpQzHwQRdg1cBCLqwdVcYq58DvSrM8zuTlUYX78hfCzhf31&X-Amz-Signature=2f3c1554433a365d71b33a75ee885dd2840c569b966014eed157eb0b9483f417&X-Amz-SignedHeaders=host&x-id=GetObject)

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
