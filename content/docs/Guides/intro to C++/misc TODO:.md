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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2KQATYZ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T090747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHZ2LPALGoSjQvsUwWbAzMpElLrx%2FkRtYUk1X8cA3pZ9AiEA6v60%2BhuGlLG0iN2BTGXT93q4VLHaMzw46M6q3rftKkcqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGT%2Bkn301AcTN0qGircA7bVZp8xPioIZHqgTzKQ9oEW5FLVVXU8keKEG5NCr1RyfKpGSDfPSyO1hP9QZ0AE6WuYFz3ZkRM65FuLsYCDcRY%2F%2FbaAXRqzXRYRIX7bXj1StGlm6spAKXfG7CYV5TR3RIuRPKCcnK%2F7BQF7FRisDg2W7259eiEO40vgfXlQKMcZNP7C45cqhgV5zCJ6oAnmHXMxx7a%2BC1zcy2L%2BdXFUWvEQZTVtC%2FK%2BFeh2KMxP6E8XJdwPyylyd7XyuliOSMuAOCbb2l15DrxYa6B2iuEkPyZ5dR0h3mnrYOIcQ5A8eQKzOqsu%2B%2Bi70uV4rMFbuOeLn2LS8SonmFK1%2FTVx%2BLDVit0ty7uUA9CChZ4NRvU6%2BlgCAJ6R1OLb%2F4wy6ujCqDZ37nPaJ8zvk5MEHP1RT6znF3v8you683%2BYgnYhspN43Bv%2BqZslZ3bEUV2WtFH%2F5EpW9A4ETjjUC3agOE2g6RSeSOq4Ut7ECKZUbWuybbaMSZZTu%2FHF4rqJMDOTfy7Lvlr03YyVFuWOM3PLxqEUMI8FLfJBKRAaoM4%2FCbxDfU6VRAUWgkquBQyGBO3W8U0rsnIQu45%2FKfzj5%2FF1jNt66mslsS1%2FA2zXXgMw0M70qENC5x0dq5H78mQs9bcNrntJMP2P%2FMAGOqUBu%2B3nF%2BPNSWu2HzWFq9G0%2Bulem%2BPEEn1LfdRdVPLgvfasWbCayogiUSmCY8vAxKtoJVHMO%2BvAAz7AH%2BZ%2FSRKGtr%2FVSYzkbqkKkD8kNXEKVgFHWme0B7AeNiLC%2FaFxaLdjkXXaqkFh0izMtxtjNCspAIKVJ41XMkCD%2BnntcBfj9CYnQl3kgDxBtcQUFwpuwJi67OqD7f5xj4LBrKTm%2BFH3C%2FZCaZ%2FW&X-Amz-Signature=0b5cfa8b5a5d10eb585dc0449d99ffc059c821915408ca2241681d3220d6de9f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2KQATYZ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T090747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHZ2LPALGoSjQvsUwWbAzMpElLrx%2FkRtYUk1X8cA3pZ9AiEA6v60%2BhuGlLG0iN2BTGXT93q4VLHaMzw46M6q3rftKkcqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGT%2Bkn301AcTN0qGircA7bVZp8xPioIZHqgTzKQ9oEW5FLVVXU8keKEG5NCr1RyfKpGSDfPSyO1hP9QZ0AE6WuYFz3ZkRM65FuLsYCDcRY%2F%2FbaAXRqzXRYRIX7bXj1StGlm6spAKXfG7CYV5TR3RIuRPKCcnK%2F7BQF7FRisDg2W7259eiEO40vgfXlQKMcZNP7C45cqhgV5zCJ6oAnmHXMxx7a%2BC1zcy2L%2BdXFUWvEQZTVtC%2FK%2BFeh2KMxP6E8XJdwPyylyd7XyuliOSMuAOCbb2l15DrxYa6B2iuEkPyZ5dR0h3mnrYOIcQ5A8eQKzOqsu%2B%2Bi70uV4rMFbuOeLn2LS8SonmFK1%2FTVx%2BLDVit0ty7uUA9CChZ4NRvU6%2BlgCAJ6R1OLb%2F4wy6ujCqDZ37nPaJ8zvk5MEHP1RT6znF3v8you683%2BYgnYhspN43Bv%2BqZslZ3bEUV2WtFH%2F5EpW9A4ETjjUC3agOE2g6RSeSOq4Ut7ECKZUbWuybbaMSZZTu%2FHF4rqJMDOTfy7Lvlr03YyVFuWOM3PLxqEUMI8FLfJBKRAaoM4%2FCbxDfU6VRAUWgkquBQyGBO3W8U0rsnIQu45%2FKfzj5%2FF1jNt66mslsS1%2FA2zXXgMw0M70qENC5x0dq5H78mQs9bcNrntJMP2P%2FMAGOqUBu%2B3nF%2BPNSWu2HzWFq9G0%2Bulem%2BPEEn1LfdRdVPLgvfasWbCayogiUSmCY8vAxKtoJVHMO%2BvAAz7AH%2BZ%2FSRKGtr%2FVSYzkbqkKkD8kNXEKVgFHWme0B7AeNiLC%2FaFxaLdjkXXaqkFh0izMtxtjNCspAIKVJ41XMkCD%2BnntcBfj9CYnQl3kgDxBtcQUFwpuwJi67OqD7f5xj4LBrKTm%2BFH3C%2FZCaZ%2FW&X-Amz-Signature=921275b3a20fc668354579cf0d9fcef5910c6a847d48478c00b8b10c18094fb1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
