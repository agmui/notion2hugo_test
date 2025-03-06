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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZM7DEY5%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T160937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEukqZzohc28PfrultxkvgE70W3rtJSTHPs0aHM%2BUdzAiB%2BBkj4PzaYdD3ZaPUgRLGBWcPBDdSL1hvU1t2QaumkKSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM6jJBmShAjPBBuPHwKtwDzLHsla7q6ecpGNITfl9NqrrtBVWiO%2B%2F%2BhYbQbWqbELVkZ%2FWlORNiiajQY1Py9HPBX14EbGdvD2N%2BlAnjwDtRKAgSG%2BjOI6GyzZGHq63EPNZ8axwllM1daMvKGwKhi42t%2BwzBhe5vn4m8a%2BbWyaxgTrFXoWyNbTd643qlFSOrsFZGpisNWip25P7MroDTt99jcOsxq9%2FL0Dgfaft8Ha3uaKylJ8drYB4i1cH9X3deJB%2Bg%2Fask8E2qoUs%2BoNPTIMCvctCEB9NZkUET%2BidQKrhk%2Bhxumk28OxrGrWCK1wnpcfrN%2FnGQp99l%2BY5nvi2xMseAjry7y6ii5gKrnzUTmi75N3UkYxMvfckPhDWVajhuejCqVBsf5Q9g%2FD8t3Wbk%2FM0q7g%2BOvhemst773vNaOIv7E9BP73B9lek4jMhtRDayEmW6Hw15qzghNQVshNNda46jFmk1HxG20aHB%2BeKEb0emvFFzJvNLW6hctoKubzku5DKuk2VF1Xu3vl%2Ba5vByYyl6jb6Ys%2BDHOQuj%2Fu4dSD%2F6uNrMlxG06zdAk8%2Fh%2FC4FRtgViaQuP%2Byz9YOwOIpOWuFK2bqfDk0T3iNoHIFe%2FWZukxGmczazu8oP4HTjhZ2M%2B8pSvTsIsqgfG5iZXf8wtJCnvgY6pgF9ql2kmPMS2hOTEijKpQjkQYhl0aydnQzHukkSRsgG3eO%2BvP2tgpL%2F9OspWt73RRSqDffpnjlhIBe2ldH57D85VXJLS32RMvz%2FVZupQTQulWvww5iTJUTgbypdaWbGEu3c1IPF5phCLz%2BXkfRobalpalWxEHAlEjOMPi9PvpyGQoxtjQu9GJKEgLBLtHUUZwjsxjUe5JgCwsQ7t6diUP9sVKmwhRRv&X-Amz-Signature=835475a16442c6cd767e5748ce099313e2d28ce696708f8f179cfc45db3a23bc&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZM7DEY5%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T160937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEukqZzohc28PfrultxkvgE70W3rtJSTHPs0aHM%2BUdzAiB%2BBkj4PzaYdD3ZaPUgRLGBWcPBDdSL1hvU1t2QaumkKSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM6jJBmShAjPBBuPHwKtwDzLHsla7q6ecpGNITfl9NqrrtBVWiO%2B%2F%2BhYbQbWqbELVkZ%2FWlORNiiajQY1Py9HPBX14EbGdvD2N%2BlAnjwDtRKAgSG%2BjOI6GyzZGHq63EPNZ8axwllM1daMvKGwKhi42t%2BwzBhe5vn4m8a%2BbWyaxgTrFXoWyNbTd643qlFSOrsFZGpisNWip25P7MroDTt99jcOsxq9%2FL0Dgfaft8Ha3uaKylJ8drYB4i1cH9X3deJB%2Bg%2Fask8E2qoUs%2BoNPTIMCvctCEB9NZkUET%2BidQKrhk%2Bhxumk28OxrGrWCK1wnpcfrN%2FnGQp99l%2BY5nvi2xMseAjry7y6ii5gKrnzUTmi75N3UkYxMvfckPhDWVajhuejCqVBsf5Q9g%2FD8t3Wbk%2FM0q7g%2BOvhemst773vNaOIv7E9BP73B9lek4jMhtRDayEmW6Hw15qzghNQVshNNda46jFmk1HxG20aHB%2BeKEb0emvFFzJvNLW6hctoKubzku5DKuk2VF1Xu3vl%2Ba5vByYyl6jb6Ys%2BDHOQuj%2Fu4dSD%2F6uNrMlxG06zdAk8%2Fh%2FC4FRtgViaQuP%2Byz9YOwOIpOWuFK2bqfDk0T3iNoHIFe%2FWZukxGmczazu8oP4HTjhZ2M%2B8pSvTsIsqgfG5iZXf8wtJCnvgY6pgF9ql2kmPMS2hOTEijKpQjkQYhl0aydnQzHukkSRsgG3eO%2BvP2tgpL%2F9OspWt73RRSqDffpnjlhIBe2ldH57D85VXJLS32RMvz%2FVZupQTQulWvww5iTJUTgbypdaWbGEu3c1IPF5phCLz%2BXkfRobalpalWxEHAlEjOMPi9PvpyGQoxtjQu9GJKEgLBLtHUUZwjsxjUe5JgCwsQ7t6diUP9sVKmwhRRv&X-Amz-Signature=d2be5669f005a0fc7ebbbea5d7487bcc08f6115c3bf1af181091ab134f6f3a5b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
